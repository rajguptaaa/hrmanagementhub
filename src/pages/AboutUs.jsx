import { motion } from 'framer-motion'
import { Building2, Calendar, Award, Target, Users, Factory } from 'lucide-react'

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">About Bengal Energy Limited</h1>
        <p className="text-blue-100 text-lg">Leading LAM Coke Producer in Eastern India since 2009</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="text-blue-600" size={24} />
            <h2 className="text-xl font-semibold dark:text-white">Company Overview</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Incorporated on 18th May, 2007, Bengal Energy Limited (BEL) is an ISO 9001-2008 certified company 
            situated at Dauka, P.O- Tentulmuri, PS-Narayangarh, Dist.-Paschim Medinipur, Pin-721437 in West Bengal. 
            The company is engaged in the production of LAM Coke.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-green-600" size={24} />
            <h2 className="text-xl font-semibold dark:text-white">Industry Leadership</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            BEL is known as a leading and renowned LAM COKE Producer in Eastern India, since 2009 with focus on 
            long steel products and Ferro Alloys. We continue to remain well-positioned as one of the largest 
            manufacturers of LAM COKE in Eastern India.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
      >
        <div className="flex items-center gap-3 mb-6">
          <Factory className="text-orange-600" size={24} />
          <h2 className="text-xl font-semibold dark:text-white">Manufacturing Capabilities</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium dark:text-white">Coke Production</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  1 x 0.6 MTPA Non-Recovery type Coke Oven, producing 600,000 TPA of low ash metallurgical Coke (LAM)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium dark:text-white">Power Generation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  1 X 40 MW power plant operated on coke oven gas
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium dark:text-white">Steel Production</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Part of 1.5 MTPA Integrated Steel plant across 470 Acres of land
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium dark:text-white">Blast Furnace</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Modern Blast Furnace producing 425,000 MTPA of Liquid Iron with advanced features
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-blue-600" size={24} />
            <h2 className="text-xl font-semibold dark:text-white">Mission</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To become a diversified global company by providing world-class quality products and unmatched 
            professional services and to build-up a brand name which will be the benchmark of the industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-green-600" size={24} />
            <h2 className="text-xl font-semibold dark:text-white">Vision & Values</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Our Business conduct rests on nine core values: Honesty, Integrity, Respect, Fairness, 
            Purposefulness, Trust, Responsibility, Citizenship and Caring.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We continuously endeavour to synergize the efforts of people, products, Process & Technology 
            to ensure High Quality Performance in all spheres of business.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="text-purple-600" size={24} />
          <h2 className="text-xl font-semibold dark:text-white">Leadership</h2>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-lg dark:text-white">OM PRAKASH JALAN</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">Chairman-cum-Managing Director</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Leading Bengal Energy Ltd. since its foundation in 2007, contributing significantly to society 
            through development of high value-added products and innovation in specialty steel production.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}