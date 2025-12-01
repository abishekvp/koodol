<script setup>
import { ref, onMounted } from 'vue'
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore'
import { db } from '../firebase/config'

const historyPuzzles = ref([])
const loading = ref(true)
const error = ref(null)

const fetchHistory = async () => {
  loading.value = true
  try {
    const q = query(
      collection(db, 'historyPuzzles'),
      orderBy('movedToHistoryAt', 'desc'),
      limit(50) // Limit to last 50 puzzles for now
    )
    
    const querySnapshot = await getDocs(q)
    historyPuzzles.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    console.error('Error fetching history:', e)
    error.value = 'Failed to load history'
  } finally {
    loading.value = false
  }
}

const formatDate = (timestamp) => {
  if (!timestamp) return 'Unknown date'
  return new Date(timestamp.toDate()).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(() => {
  fetchHistory()
})
</script>

<template>
  <div class="history-view">
    <h1 class="title">Puzzle Archives</h1>
    
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading archives...</p>
    </div>

    <div v-else-if="error" class="error-state glass-panel">
      <p>{{ error }}</p>
      <button @click="fetchHistory" class="retry-btn">Try Again</button>
    </div>

    <div v-else-if="historyPuzzles.length === 0" class="empty-state glass-panel">
      <p>No archived puzzles yet.</p>
      <p class="sub-text">Puzzles appear here after they expire.</p>
    </div>

    <div v-else class="history-grid">
      <div v-for="puzzle in historyPuzzles" :key="puzzle.id" class="history-card glass-panel">
        <div class="card-header">
          <span class="date-badge">{{ formatDate(puzzle.movedToHistoryAt) }}</span>
          <span class="author">by {{ puzzle.submittedBy }}</span>
        </div>
        
        <h2 class="movie-title">🎬 {{ puzzle.movieName }}</h2>
        
        <div class="clues-preview">
          <div class="clue-item">
            <span class="clue-label">Hardest Clue:</span>
            <p>{{ puzzle.clues[0] }}</p>
          </div>
          <div class="clue-item">
            <span class="clue-label">Easiest Clue:</span>
            <p>{{ puzzle.clues[puzzle.clues.length - 1] }}</p>
          </div>
        </div>
        
        <div class="card-footer">
          <span class="clue-count">{{ puzzle.clues.length }} clues total</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history-view {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #a855f7, #ec4899);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.history-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.history-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
}

.history-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.85rem;
}

.date-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.8);
}

.author {
  color: var(--accent-color);
  font-weight: 500;
}

.movie-title {
  font-size: 1.4rem;
  margin: 0 0 1.5rem 0;
  color: var(--primary-color);
}

.clues-preview {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
}

.clue-item {
  font-size: 0.9rem;
}

.clue-label {
  display: block;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.clue-item p {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  border-top: 1px solid var(--glass-border);
  padding-top: 1rem;
  text-align: right;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

.loading-state,
.error-state,
.empty-state {
  text-align: center;
  padding: 3rem;
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

.retry-btn {
  margin-top: 1rem;
  padding: 8px 16px;
  background: var(--primary-color);
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

.sub-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
</style>
