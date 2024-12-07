function SocialMedia() {
   return (
			<div className="flex justify-center mt-6 gap-10">
				<a
					href="https://www.instagram.com/ari.affndi"
					className="text-2xl hover:text-accent"
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a
					href="https://x.com/O_Cats_"
					className="text-2xl hover:text-secondary"
				>
					<i className="fab fa-twitter"></i>
				</a>
				<a
					href="https://www.youtube.com/@ari.affndi"
					className="text-2xl hover:text-info"
				>
					<i className="fab fa-youtube"></i>
				</a>
				<a
					href="https://www.facebook.com/ariaffand"
					className="text-2xl hover:text-primary"
				>
					<i className="fab fa-facebook"></i>
				</a>
			</div>
		);
}

export default SocialMedia