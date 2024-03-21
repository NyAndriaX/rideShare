import React, { useEffect } from 'react'
import { motion, useViewportScroll } from 'framer-motion'

const Navigation: React.FC = () => {
  const { scrollY } = useViewportScroll()

  // const [hidden, setHidden] = useState(false);

  function update() {
    console.log(scrollY)
    // if (scrollY?.current < scrollY?.prev) {
    //   setHidden(false);
    // } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
    //   setHidden(true);
    // }
  }

  // const variants = {
  //   /** this is the "visible" key and it's correlating styles **/
  //   visible: { opacity: 1, y: 0 },
  //   /** this is the "hidden" key and it's correlating styles **/
  //   hidden: { opacity: 0, y: -25 },
  // };

  useEffect(() => {
    return scrollY.onChange(() => update())
  })

  return <motion.div>Navigation</motion.div>
}

export default Navigation
