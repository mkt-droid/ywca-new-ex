import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Donate Us | YWCA of Delhi',
};

export default function DonatePage() {
  return (
    <main>
      <div className="pageContentWrapper">
      <section className={styles.donateSection}>
        <div className="container">
          <h1 className="sectionTitle_1 text-center mx-800">DONATE US</h1>

          <div className={styles.contentRow}>
            {/* QR Code Column */}
            <div className={styles.qrContainer}>
              <img
                src="/images/fund-raising/qr.jpg"
                alt="Donation QR Code"
                className={styles.qrImage}
              />
            </div>

            {/* Divider */}
            <div className={styles.divider}></div>

            {/* Banking Details Column */}
            <div className={styles.detailsContainer}>
              <h2 className="sectionTitle_2 text-center">Banking details</h2>

              <div className={styles.subHeading}>UPI ID</div>
              <div className={styles.textValue}>11519296@cbin</div>

              <div className={styles.subHeading}>Bank details</div>
              <table className={styles.detailsTable}>
                <tbody>
                  <tr>
                    <td>Bank name</td>
                    <td>Central Bank of India</td>
                  </tr>
                  <tr>
                    <td>Branch Name</td>
                    <td>Parliament Street, New Delhi-110001</td>
                  </tr>
                  <tr>
                    <td>IFSC Code</td>
                    <td>CBIN0280316</td>
                  </tr>
                  <tr>
                    <td>Account Number</td>
                    <td>1197284206</td>
                  </tr>
                  <tr>
                    <td>Account Name</td>
                    <td>YWCA OF DELHI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
