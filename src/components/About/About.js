import React from 'react';
import Styles from './aboutus.module.scss';
// import Logo from '../../assets/icons/download.png';
import { FaCross, FaBible, FaPray, FaPeopleCarry, FaAward, FaDove } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div>
      <div className={Styles.titleSectionWrapper}>
        <div className={Styles.titleSection}>
          <div className={Styles.titleTextWrapper}>
            <p className={Styles.title}>About Us</p>
            <p className={Styles.description}>
              We’re agents of transformation in the community, bring glory to God.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.whoWeAreWrapper}>
        <div className={Styles.whoWeAreContainer}>
          <h2>Who we are</h2>
          <p className={Styles.whoWeAreText}>
            Family Resource Ministry was incorporated in 2014 as a Bible-based non-profit and
            non-denominational Christian group devoted to upholding the values of Biblical marriage
            and promoting skills and standards that build healthy relationships and homes as God’s
            agent of transforming the society. We believe that our homes are God’s base station to
            disciple the nations and advance His kingdom.
          </p>
        </div>
        <div className={Styles.imageContainer}>
          <img
            style={{ width: '300px', height: '300px' }}
            src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/2.png?resize=226%2C249&ssl=1"
            alt=""
          />
        </div>
      </div>
      <div className={Styles.whoWeAreWrapper}>
        <div className={Styles.imageContainer}>
          <img
            style={{ width: '400px' }}
            src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/Vison.jpg?resize=300%2C162&ssl=1"
            alt=""
          />
        </div>
        <div className={Styles.whoWeAreContainer}>
          <h2>Our vision</h2>
          <p className={Styles.whoWeAreSubText}>God’s Instrument</p>
          <p className={Styles.whoWeAreText}>
            To be God’s instrument for building marriages that honor Him and serve as agents of
            transformation.
          </p>
        </div>
      </div>
      <div className={Styles.whoWeAreWrapper}>
        <div className={Styles.imageContainer}>
          <img
            style={{ width: '400px' }}
            src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/missionvission_994270555a2ef.jpg?resize=300%2C182&ssl=1"
            alt=""
          />
        </div>
        <div className={Styles.whoWeAreContainer}>
          <h2>Our mission</h2>
          <p className={Styles.whoWeAreSubText}>Harnessing Resources</p>
          <p className={Styles.whoWeAreText}>
            To harness resources – human and material – for creating opportunities that deepen
            family life and homes that become agents of transformation in the larger community,
            thereby bring glory to God.
          </p>
        </div>
      </div>
      <div className={Styles.corevaluesContainer}>
        <p className={Styles.subtitle}>Our Core Values</p>
        <div className={Styles.corevalues}>
          <div className={Styles.box}>
            <div className={Styles.titleWrap}>
              <div className={Styles.icon_box}>
                <figure>
                  <FaCross style={{ fontSize: '25px' }} />
                </figure>
              </div>{' '}
              <h3>Christ Centered</h3>
            </div>
            <ul>
              <li className={Styles.list}>The Lord Owns the Ministry</li>
              <li className={Styles.list}>The Lord Directs the Ministry</li>
              <li className={Styles.list}>The Lord Produces Fruit in the Ministry</li>
            </ul>
          </div>
          <div className={Styles.box}>
            <div className={Styles.titleWrap}>
              <div className={Styles.icon_box}>
                <figure>
                  <FaBible style={{ fontSize: '25px' }} />
                </figure>
              </div>{' '}
              <h3> Bible Based</h3>
            </div>
            <ul>
              <li className={Styles.list}>We Believe the Bible</li>
              <li className={Styles.list}>We Seek to live by it</li>
              <li className={Styles.list}>We teach only the Bible</li>
            </ul>
          </div>
          <div className={Styles.box}>
            <div className={Styles.titleWrap}>
              <div className={Styles.icon_box}>
                <figure>
                  <FaPray style={{ fontSize: '25px' }} />
                </figure>
              </div>
              <h3> Prayer Driven</h3>
            </div>
            <ul>
              <li className={Styles.list}>Everything is by prayer (1 Thess 5:17; Phil 4:6)</li>
            </ul>
          </div>
          <div className={Styles.box}>
            <div className={Styles.titleWrap}>
              <div className={Styles.icon_box}>
                <figure>
                  <FaPeopleCarry style={{ fontSize: '25px' }} />
                </figure>
              </div>
              <h3> Team Work</h3>
            </div>
            <ul>
              <li className={Styles.list}>Unity – We are better together.</li>
              <li className={Styles.list}>One for another.</li>
              <li className={Styles.list}>Collaboration.</li>
              <li className={Styles.list}>Partnership.</li>
            </ul>
          </div>
          <div className={Styles.box}>
            <div className={Styles.titleWrap}>
              <div className={Styles.icon_box}>
                <figure>
                  <FaAward style={{ fontSize: '25px' }} />
                </figure>
              </div>
              <h3>Grace</h3>
            </div>
            <ul>
              <li className={Styles.list}>
                Everything we do will be done in a spirit of love, acceptance and forgiveness;
                Relational-driven in approach..
              </li>
            </ul>
          </div>
          <div className={Styles.box}>
            <div className={Styles.titleWrap}>
              <div className={Styles.icon_box}>
                <figure>
                  <FaDove style={{ fontSize: '25px' }} />
                </figure>
              </div>
              <h3> Humility in Service</h3>
            </div>
            <ul>
              <li className={Styles.list}>
                It is our belief that valid Christian ministry comes out of a serving heart. People
                working with us must not be empire-builders in any sense, but servants of the Lord
                Jesus. We must do all we do only to the glory of God and in unity of purpose, not
                for fame or worldly pleasure.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Styles.statementContainer}>
        <p className={Styles.subtitle2}>Statement of Faith</p>
        <hr></hr>
        <div className={Styles.statementLeft}>
          <h3> We believe in</h3>
          <ul>
            <h3>1) The Trinity</h3>
            <li className={Styles.statementList}>
              We believe in the Triune God, eternally existing in three persons – Father, Son, and
              Holy Spirit (Deut. 6:4; Matt. 28:19; 2 Cor. 13:14; John 14:10, 26).
            </li>
          </ul>
          <ul>
            <h3>2) Jesus Christ</h3>
            <li className={Styles.statementList}>
              We believe that Jesus Christ was conceived of the Holy Spirit, born of the Virgin
              Mary, was crucified, died and was buried; He was resurrected, ascended into heaven and
              is now seated at the right hand of God the Father and is true God and true man.
            </li>
            <li className={Styles.statementList}>
              We believe that the LORD JESUS CHRIST, the Son of God, accomplished our redemption
              through his death on the cross as representative, vicarious, substitutionary
              sacrifice, and that our justification is made sure by His literal and physical
              resurrection from death. (Acts 2:18-36; Rom. 3:24-25; 1 Pet. 2:24; Eph. 1:7; 1 Pet.
              1:3-5).
            </li>
          </ul>
          <ul>
            <h3>3) Holy Spirit</h3>
            <li className={Styles.statementList}>
              We believe in the present ministry of the Holy Spirit, by whose indwelling the
              Christian is enabled to live a godly life. He is an abiding Helper, Teacher, and
              Guide. The Holy Spirit empowers our lives and ministries through the fruit and gifts
              of the Spirit.
            </li>
          </ul>
          <ul>
            <h3>4) The Bible</h3>
            <li className={Styles.statementList}>
              We believe the Bible is the inerrant, infallible and God-breathed Word of God, and
              therefore is the final authority for faith and life. The Scriptures shall be
              interpreted according to their normal grammatical-historical meaning (2 Tim. 3:16-17;
              2 Pet. 1:20-21).
            </li>
            <li className={Styles.statementList}>
              We believe God’s word is His instrument for transforming lives. The goal of Scripture
              is to bring us into a relationship with God and transform us into His likeness (John
              5:39-40).
            </li>
          </ul>
          <ul>
            <h3>5) Salvation</h3>
            <li className={Styles.statementList}>
              We believe in personal salvation of believers through the shed blood of Jesus Christ.
            </li>
          </ul>
          <ul>
            <h3>6) Baptism</h3>
            <li className={Styles.statementList}>
              We believe in water baptism, in the Baptism in the Holy Spirit as distinct from the
              new birth, in speaking with tongues as the Spirit of God gives utterance (Acts 2:4).
            </li>
          </ul>
          <ul>
            <h3>7) Death And Life</h3>
            <li className={Styles.statementList}>
              We believe in the resurrection of the dead, the eternal happiness of the saved, and
              the eternal punishment of the lost. We believe in the Christian’s hope—the
              soon-coming, personal return of the Lord Jesus Christ.
            </li>
          </ul>
          <ul>
            <h3>8) Body Of Christ</h3>
            <li className={Styles.statementList}>
              We believe in the spiritual unity of believers in our Lord Jesus Christ.
            </li>
          </ul>
          <ul>
            <h3>9) Marriage</h3>
            <li className={Styles.statementList}>
              We believe marriage is a covenant relationship between a man and a woman, designed by
              God to model the covenant relationship between Jesus and the Church. The nature of
              marriage demands unconditional faithfulness regardless of the actions or condition of
              the other party and it is until death. Marriage is the most intimate of all human
              relationships. (Gen. 2:23-25, Matthew 19:4-6, Mark 10:9).{' '}
            </li>
          </ul>
          <ul>
            <h3>10) Equality</h3>
            <li className={Styles.statementList}>
              We believe that God created humans in His image, intentionally and immutably male and
              female and that both are of equal worth before God. Male and female are unique and
              complementary in the marriage relationship.{' '}
            </li>
          </ul>
          <ul>
            <h3>11) Sexuality</h3>
            <li className={Styles.statementList}>
              We believe in the spiritual unity of believers in our Lord Jesus Christ.
            </li>
          </ul>
          <ul>
            <h3>12) Family</h3>
            <li className={Styles.statementList}>
              We believe God ordained the family institution and that it is God’s base station to
              disciple the nations and advance His kingdom. The family is the primary building block
              of all mankind’s social systems and is designed to reflect God’s unconditional love.
            </li>
            <li className={Styles.statementList}>
              We believe that the ultimate purpose of life is to know and glorify God and to attain
              eternal life through Jesus Christ our Lord, beginning within our own families.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
