"use client";

import React, { useState } from 'react';
import InnerPageBanner from '@/components/partials/InnerPageBanner';
import styles from './page.module.css';

export default function BecomeAMemberPage() {
  const [sameAsPresent, setSameAsPresent] = useState(false);
  const [formData, setFormData] = useState({
    presentAddress: '',
    permanentAddress: '',
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'presentAddress' && sameAsPresent) {
        updated.permanentAddress = value;
      }
      return updated;
    });
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSameAsPresent(checked);
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: prev.presentAddress
      }));
    }
  };

  return (
    <main>
      <InnerPageBanner
        title={<>BECOME A<br /> MEMBER</>}
        bgImage="/images/join-us/main-banner.jpeg"
        contentMarginTop="25vh"
        overlayColor="linear-gradient(to right, rgba(146, 45, 157, 0.85), rgba(146, 45, 157, 0.4))"
        defaultGrayscale={false}
      />

      <div className={styles.pageContentWrapper}>
        <div className="container">
          <div className={styles.formContainer}>
            <div className={styles.formMainTitle}>
              Interested to be a Member (for women only 18+)
            </div>
            <h2 className={styles.formSubTitle}>
              Please complete your personal information to get back to you shortly
            </h2>

            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Full Name</label>
                    <input type="text" className={styles.formControl} placeholder="Full Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email</label>
                    <input type="email" className={styles.formControl} placeholder="Email" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Date of Birth</label>
                    <input type="text" className={styles.formControl} placeholder="dd-mm-yyyy" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Mobile No.</label>
                    <input type="text" className={styles.formControl} placeholder="Mobile No." />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Present Address:</label>
                    <textarea
                      className={`${styles.formControl} ${styles.textareaControl}`}
                      name="presentAddress"
                      value={formData.presentAddress}
                      onChange={handleAddressChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <div className="d-flex justify-content-between align-items-end mb-2">
                      <label className={styles.formLabel} style={{ marginBottom: 0 }}>Permanent Address:</label>
                      <div className={styles.checkboxWrapper} style={{ marginBottom: 0 }}>
                        ( Same As Present Address )
                        <input
                          type="checkbox"
                          checked={sameAsPresent}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <textarea
                      className={`${styles.formControl} ${styles.textareaControl}`}
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleAddressChange}
                      readOnly={sameAsPresent}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className={styles.btnGroup}>
                <button type="button" className={styles.actionBtn}>SAVE</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
