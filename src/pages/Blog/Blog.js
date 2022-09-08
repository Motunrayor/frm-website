import React from 'react';
import styles from './blog.module.scss';

const data = [
  {
    id: 1,
    author: 'Family Resource Ministry Abuja',
    title: 'Financial Wisdom for couples (V)',
    url: 'https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-06-at-2.15.18-PM.jpeg?fit=1080%2C648&ssl=1',
    content:
      'Obedience to divine instructions – your greatest asset (2 Kings 4:3-7).The widow’s story changed from penury to prosperity because she obeyed the voice of the Lord through Elisha. We are guaranteed of prosperity when we diligently obey the voice of the Lord our God (Deut.28: 1-2). When God',

    date_created: ' August 2, 2022'
  },
  {
    id: 2,
    author: 'Family Resource Ministry Abuja',
    title: 'Financial Wisdom for couples (IV)',
    url: 'https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-06-at-2.14.21-PM.jpeg?fit=1080%2C648&ssl=1',
    content:
      'Leverage (2 Kings 4:3) Everything we need to be financially free is closer to us than we can imagine. The widow was asked to “go, borrow vessels from all your neighbours…”. We all must learn to use all resources provided to us by God to our advantage – that is leverage! The greatest leverage freely given to you is your spouse!',
    date_created: ' August 2, 2022'
  },
  {
    id: 3,
    author: 'Family Resource Ministry Abuja',
    title: 'Financial Wisdom for couples (III)',
    url: 'https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-06-at-2.13.32-PM.jpeg?fit=943%2C498&ssl=1',
    content:
      'Set aside for your house (2 Kings 4: 2) “What do you have in the house?” was the question of Elisha to the wife of the deceased prophet. Couples need to make conscious efforts to make investments and savings for their home. “Whoever does not provide for his own, especially for those of his own house, has denied the faith, and is worse than an infidel” 1 Tim. 5:8.',
    date_created: ' August 2, 2022'
  },
  {
    id: 4,
    author: 'Family Resource Ministry Kaduna',
    title: 'Financial Wisdom for couples (II)',
    url: 'https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-06-at-2.12.13-PM.jpeg?fit=1080%2C766&ssl=1',
    content:
      'Plan with your spouse (2 Kings 4: 1-2) The wife of the prophet cried to Elisha about the precarious financial situation left by her husband after his death. While the husband was alive, Elisha had been around and they probably had more oil than what was left when she was asked what she had at home. Planning and discussing the financial situation of the family together is very important for couples. Christian',
    date_created: ' August 2, 2022'
  },
  {
    id: 5,
    author: 'Family Resource Ministry Abuja',
    title: 'Financial Wisdom for couples (I)',
    url: 'https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/09/Feb-Week-1.jpeg?fit=1080%2C569&ssl=1',
    content:
      'Financial Prosperity is principles-based (2 Kings 4:1) A man who had a testimony of being God-fearing died and left a huge debt for his family. The debt was so much that the future of his children was going to be mortgaged as the only way to settle the creditors. The kind of life this prophet lived is something worth thinking about. He obviously',
    date_created: ' August 2, 2022'
  },
  {
    id: 6,
    author: 'Family Resource Ministry Ilorin',
    title: 'Handling Dificulty in marriage',
    url: 'https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/b.png?fit=1427%2C1459&ssl=1',
    content: 'hgfdfyuioiuhgfcvbnmkjhgfjhgfyuihgfc',
    date_created: ' August 2, 2022'
  }
];

const Blog = () => {
  return (
    <div>
      <div className={styles.titleSection}>
        <div className={styles.titleTextWrapper}>
          <p className={styles.title}>Our Blog</p>
        </div>
      </div>
      <article>
        <ul>
          {data?.map((item) => (
            <li className={styles.blogListWrapper} key={item.id}>
              <div className={styles.blogContent}>
                <h1>{item.title}</h1>
                <p>
                  <span>
                    by {item.author} | {item.date_created}
                  </span>
                </p>
                <p className={styles.content}>{item.content}...</p>
                <a href="#">Read More</a>
              </div>
              <div className={styles.blogImage}>
                <img src={item.url} alt={item.title} />
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Blog;
