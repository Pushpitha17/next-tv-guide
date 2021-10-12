const path_screens = '/Images/Data/Screens'
const path_desk_remotes = '/Images/Data/remotes/Desktop'
const path_mobile_remotes = '/Images/Data/remotes/Mobile'


const purchaseMovie = [
	{
		tv: `${path_screens}/1.png`,
		remote: {
			desktop : `${path_desk_remotes}/menu.gif`,
			mobile : `${path_mobile_remotes}/menu.gif`
		},
		instruction: {
			english: 'Press the ‘Menu’ button.',
			tamil: 'அணுக மெனு பொத்தானை அழுத்தவும் முகப்பு மெனு.',
			sinhala: 'Menu ඔබන්න',
		},
	},
	{
		tv: `${path_screens}/2.png`,
		remote: {
			desktop : `${path_desk_remotes}/right-left.gif`,
			mobile : `${path_mobile_remotes}/right-left.gif`
		},
		instruction: {
			image: false,
			english:
				'Select the ‘Movies’ option using the left/right arrow buttons.',
			tamil:
				'மெனு உருப்படிகளின் நடுவில் முன்னிலைப்படுத்தப்பட்டுள்ளது தற்போது கவனம் செலுத்திய மெனு உருப்படி.',
			sinhala: `වම සහ දකුණු Arrow keys භාවිතා කර Movies ගොනුව තෝරාගන්න.`,
		},
	},
	{
		tv: `${path_screens}/3.png`,
		remote: {
			desktop : `${path_desk_remotes}/ok.gif`,
			mobile : `${path_mobile_remotes}/ok.gif`
		},
		instruction: {
			image: false,
			english:
				'Press ‘OK’ to make the selection.',
			tamil:
				'மூவி பட்டியலைக் காண MOVIES விருப்பத்தைத் தேர்ந்தெடுக்க சரி பொத்தானை அழுத்தவும்.',
			sinhala:
				'තෝරාගැනීම සඳහා OK ඔබන්න.',
		},
	},
	{
		tv: `${path_screens}/4.png`,
		instruction: {
			image: false,
			english: `New movies are displayed under ‘New Arrivals’, highlighted in TOP LEFT MENU and the MOVIE CAROUSEL displays the same as movie posters.`,
			tamil:
				'மேல் இடது மெனு மற்றும் மூவி கொணர்வி ஆகியவற்றில் சிறப்பிக்கப்பட்டுள்ள புதிய வருகைகளுடன் திரைப்பட பட்டியல் காட்டப்படும்,',
			sinhala:
				'අලුත්ම චිත්‍රපට ‘New Arrivals’ යටතේ ප්‍රදර්ශනය කර ඇති අතර පහතින් එම චිත්‍රපටයම තෝරාගැනීමෙ හැකියාව ඇත.',
		},
	},
	{
		tv: `${path_screens}/5.png`,
		instruction: {
			image: false,
			english: `The MOVIE DESCRIPTION section on the Top Right Corner displays a brief description of the highlighted Movie.`,
			tamil:
				'மேல் இடது மெனு மற்றும் மூவி கொணர்வி ஆகியவற்றில் சிறப்பிக்கப்பட்டுள்ள புதிய வருகைகளுடன் திரைப்பட பட்டியல் காட்டப்படும்',
			sinhala:
				'ඉහත කෙලවරේ සඳහන් “Movie Description” කොටසේ අදාල චිත්‍රපටය පිලිබඳව කෙටි හැඳින්වීමක් අන්තර්ගත වේ.',
		},
	},
	{
		tv: `${path_screens}/6.png`,
		remote: {
			desktop : `${path_desk_remotes}/up-down.gif`,
			mobile : `${path_mobile_remotes}/up-down.gif`
		},
		instruction: {
			image: false,
			english:
				'Using the up/down arrow buttons, select the required ‘Language’.',
			tamil:
				'சின்ஹாலா சிறப்பம்சமாக இருக்கும் வரை மேல் இடது மெனு வழியாக மேலே அல்லது கீழே செல்ல ↑ அல்லது ↓ பொத்தான்களைப் பயன்படுத்தவும்.',
			sinhala:
				'ඉහළට සහ පහලට ඇති Arrow keys මඟින් අවශ්‍ය භාශාව තෝරාගත හැක.',
		},
	},
	{
		tv: `${path_screens}/7.png`,
		remote: {
			desktop : `${path_desk_remotes}/right-left.gif`,
			mobile : `${path_mobile_remotes}/right-left.gif`
		},
		instruction: {
			image: false,
			english:
				'Using the left/right arrow buttons, select the required ‘Genre’.',
			tamil:
				'மூவி வகைகளை அடிப்படையாகக் கொண்ட சிங்கள மொழி திரைப்படங்களின் மேலும் வகைகளாக FAMILY, COMEDY, CLASSIC போன்ற ',
			sinhala:
				'වම සහ දකුණු Arrow keys භාවිතා කර ප්‍රභේදය තෝරාගන්න',
		},
	},
	{
		tv: `${path_screens}/8.png`,
		remote: {
			desktop : `${path_desk_remotes}/ok.gif`,
			mobile : `${path_mobile_remotes}/ok.gif`
		},
		instruction: {
			image: false,
			english:
				'Press ‘OK’ to make the selection.',
			tamil:
				'கிளாசிக் வகையின் கீழ் திரைப்படங்களைக் காண கிளாசிக் விருப்பத்தைத் தேர்ந்தெடுக்க சரி பொத்தானை அழுத்தவும்.',
			sinhala:
				'තෝරාගැනීම සඳහා OK ඔබන්න',
		},
	},

	{
		tv: `${path_screens}/9.png`,
		instruction: {
			image: false,
			english:
				`The selected Genre will be highlighted on the Top Left Corner and the movies under the selected Genre will be displayed below.
				MOVIE DESCRIPTION on the Top Left Corner will display a short description of the Movie selected. `,
			tamil:
				'மேல் இடது மெனுவில் சிறப்பிக்கப்பட்ட கிளாசிக் மற்றும் கீழே கொணர்வி மூலம் மூவி பட்டியல் காட்டப்படும், கிளாசிக் வகையின் கீழ் திரைப்படங்களை திரைப்பட சுவரொட்டிகளாகக் காட்டுகிறது மேல் வலது மூலையில்',
			sinhala:
				`තොරගත් චිත්‍රපට ප්‍රභේදය ඉහල වම් කෙලවරේ ඉතා පැහැදිලිව සඳහන් වන අතර එම ප්‍රභේදයට අදාල චිත්‍රපට පහතින් දැක්වේ.
				ඉහත කෙලවරේ සඳහන් “Movie Description” කොටසේ අදාල චිත්‍රපටය පිලිබඳව කෙටි හැඳින්වීමක් අන්තර්ගත වේ`,
		},
	},
	{
		tv: `${path_screens}/10.png`,
		remote: {
			desktop : `${path_desk_remotes}/right-left.gif`,
			mobile : `${path_mobile_remotes}/right-left.gif`
		},
		instruction: {
			image: false,
			english:
				'Select the required Movie using the left/right arrow buttons.',
			tamil:
				'கொணர்விக்கு நடுவில் நீங்கள் விரும்பிய திரைப்படத்தை முன்னிலைப்படுத்த கொணர்வி முழுவதும் உலாவ <அல்லது> பொத்தான்களைப் பயன்படுத்தவும்',
			sinhala:
				'වම සහ දකුණු Arrow keys භාවිතා කර චිත්‍රපටය තෝරාගන්න.',
		},
	},
	{
		tv: `${path_screens}/11.png`,
		remote: {
			desktop : `${path_desk_remotes}/ok.gif`,
			mobile : `${path_mobile_remotes}/ok.gif`
		},
		instruction: {
			image: false,
			english:
				'Press ‘OK’ to view more information of the Movie selected.',
			tamil:
				'கொணர்வியில் சிறப்பிக்கப்பட்டுள்ள திரைப்படத்தின் சுருக்கத்தைக் காண சரி பொத்தானை அழுத்தவும்.',
			sinhala: 'තෝරාගත් චිත්‍රපටය පිලිබඳ වැඩි දුර තොරතුරු සඳහා OK ඔබන්න.',
		},
	},
	{
		tv: `${path_screens}/12.png`,
		remote: {
			desktop : `${path_desk_remotes}/ok.gif`,
			mobile : `${path_mobile_remotes}/ok.gif`
		},
		instruction: {
			image: false,
			english:
				'A SYNOPSIS of the selected Movie is displayed on the Bottom Right Corner. MOVIE DESCRIPTION section on the Top Right Corner displays Information about the Movie, Rental Price and Rental Period.',
			tamil:
				'மேல் வலது மூலையில் உள்ள திரைப்பட விவரம் சாளரம் சிறப்பம்சமாகக் காட்டப்பட்ட திரைப்படத்தின் சுருக்கமான விளக்கத்தைக் காட்டுகிறது திரைப்பட வாடகை',
			sinhala:
				'චිත්‍රපටයේ සාරාංශය පහත දකුණු කෙලවරේ කොටසේ සඳහන් වන අතර ඉහත දකුණු කෙලවරේ චිත්‍රපටය පිලිබඳව හැඳින්වීමක් සමඟ එහි මිල ගණන් හා වලංගු කාලවකවානුව සඳහන් වේ.',
		},
	},
	{
		tv: `${path_screens}/13.png`,
		remote: {
			desktop : `${path_desk_remotes}/ok.gif`,
			mobile : `${path_mobile_remotes}/ok.gif`
		},
		instruction: {
			image: false,
			english: 'Press ‘OK’ again to purchase the Movie.',
			tamil: 'மூவி வாங்க சரி பொத்தானை அழுத்தவும்.',
			sinhala: 'මිලදී ගැනීම සඳහා OK ඔබන්න.',
		},
	},
	{
		tv: `${path_screens}/14.png`,
		remote: {
			desktop : `${path_desk_remotes}/ok.gif`,
			mobile : `${path_mobile_remotes}/ok.gif`
		},
		instruction: {
			image: false,
			english:
				'Then the Movie Rental Price and Rental Period will be displayed. Press ‘OK’ again to confirm.',
			tamil: 'சரி பொத்தானை மீண்டும் அழுத்தவும்.',
			sinhala:
				'එවිට චිත්‍රපටයේ මිල ගණන් හා වලංගු කාලවකවානුව සඳහන් වන අතර තහවුරු කිරීමට OK ඔබන්න.',
		},
	},
	{
		tv: `${path_screens}/15.png`,
		remote: {
			desktop : `${path_desk_remotes}/numpad.gif`,
			mobile : `${path_mobile_remotes}/numpad.gif`
		},
		instruction: {
			image: false,
			english: `Enter the 6 digit Purchase PIN (Default PIN: 111111). Press ‘OK’ to confirm.`,
			tamil: `6 இலக்க கொள்முதல் பின்னை அழுத்தவும் (இயல்புநிலை மதிப்பு “111111”) ,
			உறுதிப்படுத்த சரி பொத்தானை அழுத்தவும்.`,
			sinhala: `ඉලක්කම් 6 කින් යුතු මිලදී ගැනීමේ කේතය (Default PIN: 111111) ඇතුලත් කර තහවුරු කිරීමට OK ඔබන්න.`,
		},
	},
	{
		tv: `${path_screens}/16.png`,
		remote: {
			desktop : `${path_desk_remotes}/ok.gif`,
			mobile : `${path_mobile_remotes}/ok.gif`
		},
		instruction: {
			image: false,
			english: 'Press OK again to play the Movie.',
			tamil: 'திரைப்படத்தை இயக்க சரி பொத்தானை அழுத்தவும்.',
			sinhala: 'චිත්‍රපටය Play කිරීමට OK ඔබන්න.',
		},
	},
	{
		tv: `${path_screens}/17.png`,
		instruction: {
			image: false,
			english: 'Enjoy watching the movie!',
			tamil: 'பத்திரிகை மெனு!',
			sinhala: 'චිත්‍රපටය නරඹන්න.',
		},
	},
]

export default purchaseMovie 