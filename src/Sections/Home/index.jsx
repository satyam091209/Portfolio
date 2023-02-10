import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>Satyam.</h1>
			<h1 className={styles.heading_2}>I build things for the web.</h1>
			<p className={styles.desc}>
				I love building things for the web. I specialize in creating websites, web applications, and other web-based solutions. 
				I'm experienced in using a variety of coding languages, development frameworks, and technologies to create solutions that 
				are designed to meet the needs of my clients. My portfolio of work includes various projects from simple static websites to 
				complex web applications. I strive to create beautiful, functional, and user-friendly solutions that are tailored to the 
				client's specific needs. With my experience and dedication, I'm confident that I can build the perfect solution for any 
				web-based project.
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;