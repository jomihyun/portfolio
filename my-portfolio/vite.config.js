import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './', // 기본값: 프로젝트 루트, 변경 시 경로 맞게 작성
  plugins: [react()],
})