import React from 'react'
import GridItem from './GridItem'
import { FaFlag, FaStar } from 'react-icons/fa6'

const Experiences = () => {
  return (
    <div className="order-2 col-span-2 h-full">
          <div className="grid grid-cols-2 gap-2 h-full">
            <GridItem
              number={"20"}
              description={"Projects"}
              icon={<FaFlag size={10} color="#22c55e" />}
            />
            <GridItem
              number={"03"}
              description={"Year Expertise"}
              icon={<FaStar size={12} color="#22c55e" />}
            />
          </div>
        </div>
  )
}

export default Experiences