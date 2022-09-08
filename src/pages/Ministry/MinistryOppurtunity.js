import React, { useState } from 'react';
import Styles from './ministry.module.scss';
import { Button } from '../../components/common';
import CoupleDinner from '../../assets/images/couple-dinner.JPG';
import MinistryFormModal from '../../container/modal/MinistryFormModal';

const MinistryOppurtunity = () => {
  const [openMinistryModal, setMinistryModal] = useState(false);
  return (
    <div>
      <div className={Styles.titleSectionWrapper}>
        <div className={Styles.titleSection}>
          <div className={Styles.titleTextWrapper}>
            <p className={Styles.title}>Ministries</p>
            <p className={Styles.description}>
              we believe that God works through His people and He has not given or put it in any
              single man, all that His people need.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.ministrySection}>
        <div className={Styles.text}>
          <p>
            At FRM, we believe that God works through His people and He has not given or put in any
            single man, all that His people need.
          </p>
          <p className={Styles.textItalic}>
            <i>
              “The body is a unit, though it is comprised of many parts. And although its parts are
              many, they all form one body. So it is with Christ … even so the body is not made up
              of one part but of many.” 1Cor 12:12, 14
            </i>
            <i>
              “But to each one of us grace has been given as Christ apportioned it.” Eph 4:7 NIV
            </i>
          </p>
          <p>
            There abound lots of ministry opportunities to use your resources as a service unto God
            through FRM. Below is a list of such available opportunities, with summary of the roles:
          </p>
        </div>
        <div className={Styles.ministryWrapper}>
          <div className={Styles.ministry}>
            <div className={Styles.ministryTextwrapper1}>
              <h1 className={Styles.heading}>We Seek For Intercessors</h1>
              <p className={Styles.ministryText}>
                We seek for Intercessors who will travail in the place of prayer, faithfully raising
                their voices before God for the advancement of the ministry in all that God has
                called FRM to do. This will be done privately and corporately at our virtual prayer
                meeting every Tuesday night.
              </p>
              <Button onClick={() => setMinistryModal(true)} theme="primary">
                Register Here
              </Button>
            </div>
            <div className={Styles.imageContainer}>
              <img
                className={Styles.image4}
                src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/a.png?resize=600%2C613&ssl=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={Styles.ministryWrapper}>
          <div className={Styles.ministry}>
            <div className={Styles.imageContainer}>
              <img
                className={Styles.image2}
                src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/b.png?fit=1427%2C1459&ssl=1"
                alt=""
              />
            </div>
            <div className={Styles.ministryTextwrapper2}>
              <h1 className={Styles.heading}>Marriage Ministry</h1>
              <p className={Styles.ministryText}>
                Apart from preparing singles for marriage, FRM has the vision to enrich Christian
                marriages and align Christian couples to the God-kind of marriage and home, using
                the Word of God as our standard.
              </p>
              <p className={Styles.ministryText}>
                Volunteers to this cause would commit to serve, moderate, teach, schedule and
                coordinate activities as Group Administrators in line with the purpose of the groups
                as follows:{' '}
              </p>
              <ul>
                <li>
                  <b>Sacred Marriage:</b> Sacred Marriage: This group focuses on helping each spouse
                  become the God-centered spouse. We amplify God’s expectations of husbands and
                  wives in marriages by establishing the truth of God’s word, making the lessons
                  more practical than theoretical, and encouraging members of the group to keep to
                  God’s expectations of their marriages.
                </li>
                <li>
                  <b>Sacred Parenting:</b> This group focuses on equipping parents to work together
                  as they learn how to raise godly children. Parenting strategies in line with the
                  word of God that are sure to produce the expected results are also discussed.
                </li>
              </ul>
              <Button theme="primary">Register Here</Button>
            </div>
          </div>
        </div>
        <div className={Styles.ministryWrapper}>
          <div className={Styles.ministry}>
            <div className={Styles.ministryTextwrapper1}>
              <h1 className={Styles.heading}>Singles’ Ministry Coordinators</h1>
              <p className={Styles.ministryText}>
                The Online Singles’ ministry is aimed at equipping singles in making the right
                marital choices and helping those in courtship to prepare properly for a godly
                marriage. This is carried out independently through our WhatsApp groups: Sacred
                Search and Sacred Courtship.
              </p>
              <p className={Styles.ministryText}>
                For this cause, we seek volunteers who would be committed to serve, moderate, teach,
                schedule and coordinate activities as Group Administrators in line with the purpose
                of the groups as follows:
              </p>
              <ul>
                <li>
                  <b>Sacred Search:</b> This group is targeted at equipping singles with the aim of
                  preparing them for marriage and enhancing their capacity to make godly marital
                  choices.
                </li>
                <li>
                  <b>Sacred Courtship:</b> This group focuses on helping those in relationships
                  prepare properly for a godly marriage by making the most of their courtship days.
                </li>
              </ul>
              <Button theme="primary">Register Here</Button>
            </div>
            <div className={Styles.imageContainer}>
              <img
                className={Styles.image2}
                src="https://familyresourceministry.org/wp-content/uploads/2022/01/15.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={Styles.ministryWrapper}>
          <div className={Styles.ministry}>
            <div className={Styles.imageContainer}>
              <img
                className={Styles.image1}
                src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/Childrens-Hangout-e1643390350709.jpg?fit=1066%2C734&ssl=1"
                alt=""
              />
            </div>
            <div className={Styles.ministryTextwrapper2}>
              <h1 className={Styles.heading}>Children Ministry</h1>
              <p className={Styles.ministryText}>
                As part of our mandate to build families, we reach out to children through the
                Children Holiday Devotional group on WhatsApp and through quarterly virtual hangouts
                for children.
              </p>
              <p className={Styles.ministryText}>
                Volunteers in this team would serve as Administrators on the Holiday Devotional
                Group, and also help to plan and execute the hangouts.{' '}
              </p>
              <Button theme="primary">Register Here</Button>
            </div>
          </div>
        </div>
        <div className={Styles.ministryWrapper}>
          <div className={Styles.ministry}>
            <div className={Styles.ministryTextwrapper1}>
              <h1 className={Styles.heading}>Social Media Outreach</h1>
              <p className={Styles.ministryText}>
                FRM reaches out with Bible-based contents (social media posts and graphic designs)
                on marriage to a wide range of audience across the world through her social media
                platforms on a weekly basis. This enables us to reach families on a wider scope and
                to be the light as we serve as positive influences for godly marriages.
              </p>
              <p className={Styles.ministryText}>
                To effectively carry out this mandate, a vibrant team is needed to focus on:
              </p>
              <ul>
                <li>Content creation</li>
                <li>Graphic designs</li>
                <li>Video</li>
                <li>Publicity (Posts, Social media ads, Ads boosting, etc.)</li>
              </ul>
              <p className={Styles.ministryText}>
                Volunteers are expected to commit to any or all of the units that make up the social
                media outreach, with a basic knowledge of such unit(s). They are required to be
                dedicated to the sensitivity and demands of the entire team.
              </p>
              <Button theme="primary">Register Here</Button>
            </div>
            <div className={Styles.imageContainer}>
              <img
                className={Styles.image3}
                src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/2.png?resize=226%2C249&ssl=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={Styles.ministryWrapper}>
          <div className={Styles.ministry}>
            <div className={Styles.imageContainer}>
              <img className={Styles.image2} src={CoupleDinner} alt="" />
            </div>
            <div className={Styles.ministryTextwrapper2}>
              <h1 className={Styles.heading}>Couples Dinner Planning Committees</h1>
              <p className={Styles.ministryText}>
                FRM organizes Christian Couples’ Dinner which are theme-centered as led by the Holy
                Spirit. This event is organized with every level of excellence – spiritually and
                physically. The entire programme, registration, venue selection and follow-up of
                attendees are pre-planned with a series of physical and virtual meetings before and
                after the event.
              </p>
              <p className={Styles.ministryText}>
                Presently, Christian Couples’ Dinner holds in Abeokuta, Abuja, Ibadan and Kaduna,
                Nigeria.{' '}
              </p>
              <p className={Styles.ministryText}>
                FRM would be glad to welcome volunteers as co – this cause.{' '}
              </p>
              <Button theme="primary">Register Here</Button>
            </div>
          </div>
        </div>
        <div className={Styles.ministryWrapper}>
          <div className={Styles.ministry}>
            <div className={Styles.ministryTextwrapper1}>
              <h1 className={Styles.heading}>FRM Courses</h1>
              <p className={Styles.ministryText}>
                The ministry runs a series of small-group courses where biblical principles are
                taught using the provided manuals to enrich lives. The courses are:
              </p>
              <ul>
                <li>Marriage Preparatory Course.</li>
                <li>Marriage Course.</li>
                <li>Parenting Classes.</li>
              </ul>
              <p className={Styles.ministryText}>
                We welcome qualified volunteers to serve as either Facilitators or Class
                Administrator Assistants.
              </p>
              <Button theme="primary">Register Here</Button>
            </div>
            <div className={Styles.imageContainer}>
              <img
                className={Styles.image2}
                src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/ACCD2019_-516-scaled.jpg?resize=768%2C512&ssl=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={Styles.ministryWrapper}>
          <div className={Styles.ministry}>
            <div className={Styles.ministryTextwrapper1}>
              <h1 className={Styles.heading}>FRM Volunteering Service</h1>
              <p className={Styles.ministryText}>
                The assignment that God has given FRM requires a wide range of co-labourers. More
                hands are needed for the work; the harvest is indeed ripe. Together, we can achieve
                more. Opportunities abound to use your skills, or spend your weekends, holidays,
                dedicated periods, NYSC/pre-NYSC or some other free time you have to serve God
                through the FRM Volunteer Service.
              </p>
              <p className={Styles.ministryText}>
                Everyone interested has a place at FRM. Are you an accountant, tax consultant, legal
                practitioner, security professional, counsellor, editor, logistics professional,
                interior decorator, etc? Do you have digital marketing, administrative, IT or
                secretarial skills?
              </p>
              <p className={Styles.ministryText}>
                Come serve with us by offering your professional services unto God at no pay from
                FRM. FRM highly appreciates your service as a major contribution to the advancement
                of the ministry’s God-given assignment. However, FRM would not make financial
                commitments to volunteers because it runs as a non-profit organization. Serving God
                is a worthy cause because He is a Faithful Rewarder.{' '}
              </p>
              <Button theme="primary">Join Us</Button>
            </div>
            <div className={Styles.imageContainer}>
              <img
                className={Styles.image3}
                src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/e.png?resize=800%2C818&ssl=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className={Styles.ministryText}>
          <b>
            Thank you for your availability and for offering your skills without financial rewards.
            We know that our heavenly Father will reward our labour of love bountifully. God’s
            Blessings!
          </b>
        </p>
      </div>
      {openMinistryModal && (
        <MinistryFormModal isOpen={openMinistryModal} onClick={() => setMinistryModal(false)} />
      )}
    </div>
  );
};

export default MinistryOppurtunity;
