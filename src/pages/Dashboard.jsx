import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Calendar, DollarSign, Bell, TrendingUp } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { employees as employeesAPI, leaves as leavesAPI, attendance as attendanceAPI } from '../services/api'

const data = [
  { name: 'Jan', attendance: 85 },
  { name: 'Feb', attendance: 88 },
  { name: 'Mar', attendance: 82 },
  { name: 'Apr', attendance: 90 },
  { name: 'May', attendance: 87 },
  { name: 'Jun', attendance: 92 },
]

export default function Dashboard() {
  const [stats, setStats] = useState({ employees: 0, leaves: 0, present: 0, absent: 0 })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [empRes, leaveRes, attRes] = await Promise.all([
        employeesAPI.getAll(),
        leavesAPI.getAll(),
        attendanceAPI.getAll()
      ])
      const today = new Date().toDateString()
      const todayAtt = attRes.data.filter(a => new Date(a.date).toDateString() === today)
      setStats({
        employees: empRes.data.length,
        leaves: leaveRes.data.filter(l => l.status === 'Pending').length,
        present: todayAtt.filter(a => a.status === 'Present').length,
        absent: todayAtt.filter(a => a.status === 'Absent').length
      })
    } catch (error) {
      console.error('Failed to fetch stats')
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">Bengal Energy Ltd. - HR Dashboard</h2>
        <p className="text-blue-100">Human Resource Management System</p>
        <div className="mt-4 text-sm text-blue-200">
          <span className="bg-blue-700 px-3 py-1 rounded-full">ISO 9001-2008 Certified</span>
          <span className="ml-2 bg-blue-700 px-3 py-1 rounded-full">Leading LAM Coke Producer</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-xl shadow-sm border border-green-200 dark:border-green-700">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="text-green-600 dark:text-green-400" size={24} />
            <h3 className="font-semibold text-green-800 dark:text-green-200">Today's Attendance</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-green-700 dark:text-green-300">Present: <strong className="text-lg">{stats.present}</strong></p>
            <p className="text-sm text-green-700 dark:text-green-300">Absent: <strong className="text-lg">{stats.absent}</strong></p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-6 rounded-xl shadow-sm border border-orange-200 dark:border-orange-700">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="text-orange-600 dark:text-orange-400" size={24} />
            <h3 className="font-semibold text-orange-800 dark:text-orange-200">Leave Requests</h3>
          </div>
          <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{stats.leaves}</p>
          <p className="text-sm text-orange-700 dark:text-orange-300">Pending approvals</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-xl shadow-sm border border-blue-200 dark:border-blue-700">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">BEL Workforce</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.employees}</p>
          <p className="text-sm text-blue-700 dark:text-blue-300">Total employees</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-xl shadow-sm border border-purple-200 dark:border-purple-700">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="text-purple-600 dark:text-purple-400" size={24} />
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">Payroll Status</h3>
          </div>
          <p className="text-lg font-bold text-green-600 dark:text-green-400">✓ Ready to Process</p>
          <p className="text-sm text-purple-700 dark:text-purple-300">Monthly payroll</p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp size={20} />
          Graph: Monthly Attendance Trend
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="attendance" stroke="#2d7ef7" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold dark:text-white mb-4 flex items-center gap-2">
          <Bell size={20} />
          Notifications Panel
        </h3>
        <div className="space-y-3">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-medium dark:text-gray-200">🏭 Bengal Energy Ltd. - Production Update</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">LAM Coke production on track - 600,000 TPA target</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg border-l-4 border-green-500">
            <p className="text-sm font-medium dark:text-gray-200">📋 Policy Update: New safety protocols implemented</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Effective immediately for all steel production units</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-lg border-l-4 border-orange-500">
            <p className="text-sm font-medium dark:text-gray-200">⏰ {stats.leaves} pending leave approvals require attention</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Review and approve pending requests</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
