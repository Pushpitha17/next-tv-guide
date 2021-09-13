import styles from '../styles/Content.module.scss'
import data from '../public/PurchaseMovieInstructions'
import { useState, useEffect , useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
    };

function Content({lang}) {

    const [[page, direction], setPage] = useState([0, 0]);

    const [loading , setLoading] = useState(true)

    const contentIndex = wrap(0, data.length, page);

    const paginate = (newDirection) => {
        setLoading(true)
        setPage([page + newDirection, newDirection]);
    };



    useEffect(() => {
        document.onkeydown = checkKey;

        function checkKey(e) {

            e = e || window.event;

            if (e.keyCode == '37' && page != 0) {
                // left arrow
                paginate(-1)
            }
            else if (e.keyCode == '39' && page != (data.length - 1)) {
                // right arrow
                paginate(1)
            }
        }
    }, [page])




    console.log(loading)
    
    return (
        <div className={styles.container}>
            <motion.div className={styles.visuals}
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
      
                  if (swipe < -swipeConfidenceThreshold  && page != (data.length - 1)) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold && page != 0) {
                    paginate(-1);
                  }
                }}
            
            >
                {data[contentIndex].remote ? (
                    <div className={styles.tvAndRemoteContainer}>
                        <div className={styles.tvWithRemote}>
                            <img src={data[contentIndex].tv} className={styles.tv}  ></img>
                        </div>
                        <div className={styles.remoteContainer}>
                            <img
                                className={styles.remote}
                                sizes="(max-width:1200px) 200px, 1168px"
                                srcSet={`${data[contentIndex].remote.mobile} 200w, ${data[contentIndex].remote.mobile} 500w, ${data[contentIndex].remote.desktop} 1168w`}
                            >
                            </img>
                        </div>
                    </div> ) : (
                        <div className={styles.tvOnlyContainer}>
                            <img src={data[contentIndex].tv} className={styles.onlyTv}/>
                        </div>
                    )
                }
            </motion.div>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    {data[contentIndex].instruction[`${lang}`]}
                </div>
            </div>
            <div className={styles.controls}>
                <div className={styles.controlsContainer}>
                    {page == 0 ? null : (
                        <div className={styles.prevBtn} onClick={() => paginate(-1)}>
                            <img src='/Images/Static/arrow-left.png' className={styles.arrowImg} ></img>
                        </div>
                    )}
                    {page == (data.length - 1) ? null : (
                        <div className={styles.nextBtn} onClick={() => paginate(1)}>
                            <img src='/Images/Static/arrow-right.png' className={styles.arrowImg}></img>
                        </div>
                    )}                    
                    
                </div>             
            </div>
        </div>
    )
}

export default Content
