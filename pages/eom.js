import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';

export const EOM = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Profile Rendering</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>

      <div className="page-container">
        <Toolbar />

        <div className={styles.main}>
          <h1>Profile Rendering</h1>

          <div className={styles.employeeOfTheMonth}>
  <h3>Afrin Jamal</h3>
  <h6>{employee.position}</h6>
  <img src="https://media.licdn.com/dms/image/D4D03AQFjX_lCT_UEUg/profile-displayphoto-shrink_800_800/0/1669899735591?e=1705536000&v=beta&t=rtYlxPHZl3Svpx0kKpAoGwPrLSK73IgfdWKjWPdZURM" alt="employee" />
  <p>{employee.description}</p>
</div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch('https://my-json-server.typicode.com/AJunaid07/news-app/employeeOfTheMonth',
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
