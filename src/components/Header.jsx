import avatar from '../assets/avatar.jpg'

function Header() {
   return (
			<div className="text-center">
				<div className="avatar">
					<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-4">
						<img src={avatar} alt="Avatar" />
					</div>
				</div>
				<h1 className="text-2xl font-bold">ari</h1>
				<p className="text-sm text-gray-400">Informatics Engineering</p>
				<p className="text-sm text-gray-400">Drafter & Surveyour</p>
			</div>
		);
}

export default Header