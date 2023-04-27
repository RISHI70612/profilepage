import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import styles from "./index.module.css";
const PROFILEPAGE: NextPage = () => {
  const onAashaHeading1ButtonCTAClick = useCallback(() => {
    // Please sync "projects" to the project
  }, []);

  return (
    <div className={styles.profilePage}>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <div className={styles.projectTitle}>
        <div className={styles.projectTitle1}>PROJECT TITLE</div>
      </div>
      <div className={styles.story}>
        <div className={styles.arifHasanH9mfenexvi4UnsplasWrapper}>
          <img
            className={styles.arifHasanH9mfenexvi4UnsplasIcon}
            alt=""
            src="/arifhasanh9mfenexvi4unsplash-1@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.campaignStoryWrapper}>
            <i className={styles.campaignStory}>CAMPAIGN STORY</i>
          </div>
          <i className={styles.iHopeThisContainer}>
            <span className={styles.iHopeThisContainer1}>
              <p className={styles.iHopeThis}>
                I hope this letter finds you in good health and spirits. I am
                writing to you on behalf of [Organization's Name], a non-profit
                organization dedicated to [Cause/mission of the organization].
                We are reaching out to you today with a humble request for your
                support through a donation.
              </p>
              <p className={styles.iHopeThis}>
                As you may know, [Briefly explain the importance and impact of
                the cause/mission of your organization]. Our organization has
                been working tirelessly to [Highlight the accomplishments and
                ongoing efforts of your organization]. However, in order to
                continue our vital work, we rely heavily on the generosity of
                individuals like you who share our passion for making a
                difference in the lives of those in need.
              </p>
            </span>
          </i>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.collectionParent}>
          <div className={styles.collection}>
            <textarea className={styles.raised} placeholder="$" />
            <div className={styles.target}>
              <div className={styles.raisedOf}>{`raised of  `}</div>
            </div>
            <textarea className={styles.collectionChild} />
            <textarea className={styles.collectionItem} />
          </div>
          <ProgressBar className={styles.progressBar} />
        </div>
        <button
          className={styles.aashaHeading1ButtonCta}
          onClick={onAashaHeading1ButtonCTAClick}
        >
          <button className={styles.rectangle} />
          <div className={styles.donateNow}>Donate Now</div>
        </button>
        <div className={styles.primaryButton}>
          <div className={styles.rectangle1} />
          <div className={styles.followThisCampaign}>FOLLOW THIS CAMPAIGN</div>
        </div>
      </div>
    </div>
  );
};

export default PROFILEPAGE;
