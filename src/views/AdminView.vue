<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { auth, db } from '../firebase/config'

const router = useRouter()
const isAdmin = ref(false)
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const checkingAuth = ref(true) // Hide both login and dashboard until auth is checked

// Mock pending puzzles
const pendingPuzzles = ref([])
const approvedPuzzles = ref([])
const rejectedPuzzles = ref([])
const loadingPuzzles = ref(false)
const activeTab = ref('queue') // 'queue', 'approved', 'rejected'

// Fetch pending puzzles from Firestore
const fetchPendingPuzzles = async () => {
  loadingPuzzles.value = true
  try {
    console.log('Fetching pending puzzles...')
    const q = query(
      collection(db, 'puzzles'),
      where('status', '==', 'pending')
    )
    const querySnapshot = await getDocs(q)
    console.log('Query result:', querySnapshot.size, 'documents found')
    pendingPuzzles.value = querySnapshot.docs.map(doc => {
      console.log('Document data:', doc.id, doc.data())
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    console.log('Pending puzzles:', pendingPuzzles.value)
  } catch (e) {
    console.error('Error fetching puzzles:', e)
    console.error('Error code:', e.code)
    console.error('Error message:', e.message)
  } finally {
    loadingPuzzles.value = false
  }
}

const fetchApprovedPuzzles = async () => {
  loadingPuzzles.value = true
  try {
    const q = query(
      collection(db, 'puzzles'),
      where('status', '==', 'approved')
    )
    const querySnapshot = await getDocs(q)
    approvedPuzzles.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    console.error('Error fetching approved puzzles:', e)
  } finally {
    loadingPuzzles.value = false
  }
}

const fetchRejectedPuzzles = async () => {
  loadingPuzzles.value = true
  try {
    const q = query(
      collection(db, 'puzzles'),
      where('status', '==', 'rejected')
    )
    const querySnapshot = await getDocs(q)
    rejectedPuzzles.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    console.error('Error fetching rejected puzzles:', e)
  } finally {
    loadingPuzzles.value = false
  }
}

const switchTab = (tab) => {
  activeTab.value = tab
  if (tab === 'queue') fetchPendingPuzzles()
  else if (tab === 'approved') fetchApprovedPuzzles()
  else if (tab === 'rejected') fetchRejectedPuzzles()
}

// Check if user is already logged in on mount
onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      isAdmin.value = true
      fetchPendingPuzzles()
    } else {
      // Redirect to home if not authenticated
      router.push('/')
    }
    checkingAuth.value = false // Auth state determined, show appropriate UI
  })
})

const login = async () => {
  if (!email.value || !password.value) {
    error.value = 'Please enter email and password'
    return
  }
  
  loading.value = true
  error.value = ''
  
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    isAdmin.value = true
    await fetchPendingPuzzles()
  } catch (e) {
    error.value = 'Invalid email or password'
    console.error('Login error:', e)
  } finally {
    loading.value = false
  }
}

const approve = async (id) => {
  try {
    const puzzleRef = doc(db, 'puzzles', id)
    await updateDoc(puzzleRef, {
      status: 'approved'
    })
    pendingPuzzles.value = pendingPuzzles.value.filter(p => p.id !== id)
  } catch (e) {
    console.error('Error approving puzzle:', e)
    alert('Failed to approve puzzle')
  }
}

const reject = async (id) => {
  try {
    const puzzleRef = doc(db, 'puzzles', id)
    await updateDoc(puzzleRef, {
      status: 'rejected'
    })
    pendingPuzzles.value = pendingPuzzles.value.filter(p => p.id !== id)
  } catch (e) {
    console.error('Error rejecting puzzle:', e)
    alert('Failed to reject puzzle')
  }
}

const logout = async () => {
  try {
    await auth.signOut()
    isAdmin.value = false
    email.value = ''
    password.value = ''
    router.push('/')
  } catch (e) {
    console.error('Error logging out:', e)
  }
}
</script>

<template>
  <div class="admin-view">
    <h1 class="title">Admin Dashboard</h1>

    <div v-if="checkingAuth" class="loading-state">
      <div class="spinner"></div>
      <p>Checking authentication...</p>
    </div>

    <div v-else class="dashboard">
      <!-- Floating Sidebar -->
      <div class="floating-sidebar">
        <button 
          @click="switchTab('queue')" 
          :class="['sidebar-btn', { active: activeTab === 'queue' }]"
          title="Queue (Pending)"
        >
          ⏳
        </button>
        <button 
          @click="switchTab('approved')" 
          :class="['sidebar-btn', { active: activeTab === 'approved' }]"
          title="Approved"
        >
          ✨
        </button>
        <button 
          @click="switchTab('rejected')" 
          :class="['sidebar-btn', { active: activeTab === 'rejected' }]"
          title="Rejected"
        >
          🗑️
        </button>
        <div class="sidebar-divider"></div>
        <button 
          @click="logout" 
          class="sidebar-btn logout-btn"
          title="Logout"
        >
          👋
        </button>
      </div>

      <div v-if="loadingPuzzles" class="loading-state">
        <div class="spinner"></div>
        <p>Loading puzzles...</p>
      </div>
      
      <div v-else-if="activeTab === 'queue' && pendingPuzzles.length === 0" class="empty-state glass-panel">
        <p>No pending puzzles to review.</p>
      </div>
      
      <div v-else-if="activeTab === 'approved' && approvedPuzzles.length === 0" class="empty-state glass-panel">
        <p>No approved puzzles yet.</p>
      </div>
      
      <div v-else-if="activeTab === 'rejected' && rejectedPuzzles.length === 0" class="empty-state glass-panel">
        <p>No rejected puzzles.</p>
      </div>

      <div v-else class="puzzles-list">
        <div 
          v-for="puzzle in (activeTab === 'queue' ? pendingPuzzles : activeTab === 'approved' ? approvedPuzzles : rejectedPuzzles)" 
          :key="puzzle.id" 
          class="puzzle-card glass-panel"
        >
          <div class="puzzle-header">
            <div class="puzzle-info">
              <h3 class="movie-title">🎬 {{ puzzle.movieName }}</h3>
              <div class="meta-info">
                <span class="submitter">👤 {{ puzzle.submittedBy }}</span>
                <span class="clue-count">📝 {{ puzzle.clues.length }} clues</span>
              </div>
            </div>
            <div v-if="activeTab === 'queue'" class="actions">
              <button @click="approve(puzzle.id)" class="btn-approve">
                ✓ Approve
              </button>
              <button @click="reject(puzzle.id)" class="btn-reject">
                ✕ Reject
              </button>
            </div>
          </div>
          
          <div class="clues-section">
            <h4 class="clues-title">Clues (Hardest → Easiest)</h4>
            <ol class="clues-list">
              <li v-for="(clue, idx) in puzzle.clues" :key="idx" class="clue-item">
                <span class="clue-number">#{{ idx + 1 }}</span>
                <span class="clue-text">{{ clue }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-view {
  max-width: 800px;
  margin: 0 auto;
}

.puzzle-card {
  margin-bottom: 2rem;
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;
}

.puzzle-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.puzzle-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--glass-border);
}

.puzzle-info {
  flex: 1;
}

.movie-title {
  margin: 0 0 0.5rem 0;
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
}

.meta-info {
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
}

.submitter, .clue-count {
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.btn-approve, .btn-reject {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-approve {
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: #064e3b;
  box-shadow: 0 2px 8px rgba(74, 222, 128, 0.3);
}

.btn-approve:hover {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 222, 128, 0.4);
}

.btn-reject {
  background: linear-gradient(135deg, #f87171, #ef4444);
  color: #7f1d1d;
  box-shadow: 0 2px 8px rgba(248, 113, 113, 0.3);
}

.btn-reject:hover {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(248, 113, 113, 0.4);
}

.clues-section {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.clues-title {
  margin: 0 0 1rem 0;
  color: var(--secondary-color);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.clues-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.clue-item {
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid var(--accent-color);
  transition: background 0.2s;
}

.clue-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.clue-number {
  font-weight: 700;
  color: var(--accent-color);
  min-width: 30px;
  flex-shrink: 0;
}

.clue-text {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}

.error-message {
  color: #f87171;
  font-size: 0.9rem;
  margin: 0;
  text-align: center;
}

.loading-state {
  text-align: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.floating-sidebar {
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 0.75rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.sidebar-btn {
  width: 50px;
  height: 50px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
}

.sidebar-btn.active {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  box-shadow: 0 2px 8px rgba(168, 85, 247, 0.4);
}

.sidebar-divider {
  height: 1px;
  background: var(--glass-border);
  margin: 0.25rem 0;
}

.logout-btn {
  background: rgba(239, 68, 68, 0.2) !important;
}

.logout-btn:hover {
  background: rgba(239, 68, 68, 0.3) !important;
  color: #f87171;
}
</style>
