function ProfilePicture() {
	const imageUrl = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';

	const handleClick = (e) => e.target.style.display = "none";

	return (<img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile" />)
}

export default ProfilePicture;