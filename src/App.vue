<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase/config'

const router = useRouter()
const clickCount = ref(0)
const showLoginPopup = ref(false)
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const handleLogoClick = () => {
  clickCount.value++
  if (clickCount.value >= 3) {
    clickCount.value = 0 // Reset counter
    
    // Check if user is already authenticated
    const currentUser = auth.currentUser
    if (currentUser) {
      // Already authenticated, go directly to admin
      router.push('/admin')
    } else {
      // Not authenticated, show login popup
      showLoginPopup.value = true
    }
  }
}

const closePopup = () => {
  showLoginPopup.value = false
  email.value = ''
  password.value = ''
  error.value = ''
}

const login = async () => {
  if (!email.value || !password.value) {
    error.value = 'Please enter email and password'
    return
  }
  
  loading.value = true
  error.value = ''
  
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    closePopup()
    router.push('/admin')
  } catch (e) {
    error.value = 'Invalid email or password'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="app-container">
    <nav class="glass-panel nav-bar">
      <router-link to="/" class="logo" @click.prevent="handleLogoClick">✨ CineMyst</router-link>
      <div class="nav-links">
        <router-link to="/">Play</router-link>
        <router-link to="/submit">Submit Puzzle</router-link>
      </div>
    </nav>
    
    <!-- Admin Login Popup -->
    <transition name="fade">
      <div v-if="showLoginPopup" class="popup-overlay" @click.self="closePopup">
        <div class="popup-content glass-panel">
          <div class="popup-header">
            <h2>🔐 Admin Login</h2>
            <button @click="closePopup" class="close-btn">✕</button>
          </div>
          
          <div class="popup-body">
            <input 
              v-model="email" 
              type="email" 
              placeholder="Admin Email" 
              class="input-field"
              @keyup.enter="login"
            />
            <input 
              v-model="password" 
              type="password" 
              placeholder="Password" 
              class="input-field"
              @keyup.enter="login"
            />
            <p v-if="error" class="error-message">{{ error }}</p>
            <button @click="login" class="btn-primary" :disabled="loading">
              {{ loading ? 'Logging in...' : 'Login' }}
            </button>
          </div>
        </div>
      </div>
    </transition>
    
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin: 1rem;
  background: rgba(15, 23, 42, 0.7); /* Darker semi-transparent background */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-color);
  background: linear-gradient(to right, #fff, #a5f3fc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  user-select: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover, .nav-links a.router-link-active {
  color: white;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content {
  width: 90%;
  max-width: 400px;
  padding: 0;
  overflow: hidden;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--glass-border);
}

.popup-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.close-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.popup-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.error-message {
  color: #f87171;
  font-size: 0.9rem;
  margin: 0;
  text-align: center;
}

.main-content {
  margin-top: 80px; /* Adjust based on navbar height */
}
</style>
