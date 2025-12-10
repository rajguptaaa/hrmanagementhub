import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import employeeRoutes from './routes/employees.js'
import attendanceRoutes from './routes/attendance.js'
import leaveRoutes from './routes/leaves.js'
import payrollRoutes from './routes/payroll.js'
import jobRoutes from './routes/jobs.js'

dotenv.config()

const app = express()

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://hrmanagementhub-7kna4unnd-raj-gupta-s-projects-2fb4e5da.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))
app.options('*', cors()); 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  console.log('---- INCOMING REQUEST ----');
  console.log('URL:', req.url);
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  console.log('Headers Content-Type:', req.headers['content-type']);
  next();
});


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))


app.get('/', (req, res) => {
  res.send('API WORKING')
});
app.use('/api/auth', authRoutes)
app.use('/api/employees', employeeRoutes)
app.use('/api/attendance', attendanceRoutes)
app.use('/api/leaves', leaveRoutes)
app.use('/api/payroll', payrollRoutes)
app.use('/api/jobs', jobRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
