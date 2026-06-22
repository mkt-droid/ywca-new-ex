'use client'
import { useEffect, useRef } from "react";

const ImpactSection = () => {

  const sectionRef = useRef(null);

  useEffect(() => {

    const animateCounter = (el) => {

      const target = parseInt(
        el.getAttribute("data-target"),
        10
      );

      const duration = 4000;
      const start = performance.now();

      const update = (now) => {

        const elapsed = now - start;

        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(eased * target);

        el.textContent = current.toLocaleString("en-IN");

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target
              .querySelectorAll(".stat-num")
              .forEach(animateCounter);

            observer.unobserve(entry.target);
          }

        });

      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (

    <div ref={sectionRef}>

      {/* Row 1 */}
      <div className="row text-center mb-2">

        <div className="col-4 pl">
          <div className="stat-box stat-box-color-1">

            <img src="/images/icons/motivational.png" alt="brand" />

            <span
              className="stat-num color-1"
              data-target="5590"
            >
              0
            </span>

            <div className="stat-lbl">
              Individuals empowered through education & advocacy
            </div>

          </div>
        </div>

        <div className="col-4 pl">
          <div className="stat-box stat-box-color-2">

            <img src="/images/icons/vocational.png" alt="brand" />

            <span
              className="stat-num color-2"
              data-target="150"
            >
              0
            </span>

            <div className="stat-lbl">
              Women & children received care and protection in Shelter Homes
            </div>

          </div>
        </div>

        <div className="col-4">
          <div className="stat-box stat-box-color-3">

            <img src="/images/icons/care.png" alt="brand" />

            <span
              className="stat-num color-3"
              data-target="452"
            >
              0
            </span>

            <div className="stat-lbl">
              Women gained skills through institutes and community programs
            </div>

          </div>
        </div>

      </div>

      {/* Row 2 */}
      <div className="row text-center mt-4">

        <div className="col-4 pl">
          <div className="stat-box stat-box-color-4">

            <img src="/images/icons/civil-rights.png" alt="brand" />

            <span
              className="stat-num color-4"
              data-target="1816"
            >
              0
            </span>

            <div className="stat-lbl">
              Households engaged in community problem solving & rights awareness
            </div>

          </div>
        </div>

        <div className="col-4 pl">
          <div className="stat-box stat-box-color-5">

            <img src="/images/icons/vegitarian.png" alt="brand" />

            <span
              className="stat-num color-5"
              data-target="140"
            >
              0
            </span>

            <div className="stat-lbl">
              Children received remedial education and daily nutritious meals
            </div>

          </div>
        </div>

        <div className="col-4 pl">
          <div className="stat-box stat-box-color-6">

            <img src="/images/icons/apple.png" alt="brand" />

            <span
              className="stat-num color-6"
              data-target="60"
            >
              0
            </span>

            <div className="stat-lbl">
              Children provided doorstep education to prevent dropouts
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default ImpactSection;