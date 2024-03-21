import React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';

const container = {
	hide: {
		scale: 0,
	},
	show: {
		scale: 1,
		transition: {
			staggerChildren: 0.1,
			stiffness: 80,
			damping: 50,
		},
	},
};

const item = {
	hide: {
		x: 500,
	},
	show: {
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const NavDrawer: React.FC = () => {
	const containerRef = useRef(null);
	const [isOpen, toggleOpen] = useCycle(false, true);
	const { height } = useDimensions(containerRef);

	return (
		<>
			<motion.div
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				custom={height}
				ref={containerRef}>
				<MenuToggle toggle={() => toggleOpen()} />
				{/* <div open={isOpen} anchor="right" onClose={() => toggleOpen()}>
          <motion.div
            variants={container}
            initial="hide"
            animate="show"
            style={{ width: "calc(100vw - 60px)" }}
          >
            <div className="my-2">
              <div onClick={() => toggleOpen()}>
                X
              </div>
            </div>
            <motion.li variants={item}>hello</motion.li>
            <motion.li variants={item}>hello</motion.li>
            <motion.li variants={item}>hello</motion.li>
            <motion.li variants={item}>hello</motion.li>
            <motion.li variants={item}>hello</motion.li>
          </motion.div>
        </div>*/}
			</motion.div>
		</>
	);
};

export default NavDrawer;
