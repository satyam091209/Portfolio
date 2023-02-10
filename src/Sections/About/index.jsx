import Heading from "../../Components/Heading";
import styles from "./styles.module.css";
import profileImage from "../../profile.jpg"

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					I am an outgoing and independent person. I am very hardworking and determined to succeed. 
					I enjoy learning new things and challenging myself to do things outside of my comfort zone. 
					I am an avid reader and love exploring new places. I believe in the power of positive 
					thinking and never give up on my dreams. I believe that everyone has something unique and 
					special to offer, and I strive to make the most of my talents and abilities.
					</p>
					<p className={styles.desc}>
					I am passionate about web development and strive to stay up-to-date with the latest technologies.
				    I pride myself on my problem-solving skills and am always eager to find creative solutions.
				    I am a great communicator and highly value collaboration and teamwork.
					</p>
				</div>
				<div className={styles.right}>
					<div className={styles.img_border}>
						<img
							src={profileImage}
							alt="profile"
							className={styles.profile_img}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;