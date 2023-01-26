import styles from './page.module.css';

const getBlogData = () => {
  return [
    {
      title: 'Blog Post React Server Components',
      description: 'Covers React Server components in-depth',
      formattedDate: '1920-01-01',
    },
  ];
};

export default function Home() {
  const data = getBlogData();
  return (
    <main className={styles.main}>
      {data.map(({ title, description, formattedDate }, idx) => (
        <div key={`${idx}-${title}`}>
          <h2>{title}</h2>
        </div>
      ))}
    </main>
  );
}
