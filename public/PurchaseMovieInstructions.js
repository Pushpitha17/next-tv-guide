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
			english: 'Press MENU Button to access Home Menu.',
			tamil: 'அணுக மெனு பொத்தானை அழுத்தவும் முகப்பு மெனு.',
			sinhala: 'ප්‍රධාන මෙනුව වෙත ප්‍රවේශ වීමට MENU බොත්තම ඔබන්න.',
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
				'Highlighted at the middle of menu items is the currently focused Menu item.                                         Use < or > buttons to navigate across Main Menu items until MOVIES is highlighted.',
			tamil:
				'மெனு உருப்படிகளின் நடுவில் முன்னிலைப்படுத்தப்பட்டுள்ளது தற்போது கவனம் செலுத்திய மெனு உருப்படி.',
			sinhala: `දැනට අවධානය යොමු වී  ඇති මෙනු අයිතමය ප්‍රධාන මෙනුවේ මැදින් ඉස්මතු වී පෙනේ.                                          MOVIES ඉස්මතු වන තෙක් ප්‍රධාන මෙනු අයිතම හරහා සැරිසැරීමට < හෝ > බොත්තම් භාවිතා කරන්න.`,
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
				'Press OK Button to select MOVIES option to see Movie Catalogue.',
			tamil:
				'மூவி பட்டியலைக் காண MOVIES விருப்பத்தைத் தேர்ந்தெடுக்க சரி பொத்தானை அழுத்தவும்.',
			sinhala:
				'චිත්‍රපට නාමාවලිය බැලීම සඳහා  MOVIES විකල්පය තේරීමට OK බොත්තම ඔබන්න.',
		},
	},
	{
		tv: `${path_screens}/4.png`,
		instruction: {
			image: false,
			english: `Movie Catelogue is displayed with NEW ARRIVALS highlighted in the TOP LEFT MENU and MOVIES CAROUSEL below showing newly added movies as movie posters.`,
			tamil:
				'மேல் இடது மெனு மற்றும் மூவி கொணர்வி ஆகியவற்றில் சிறப்பிக்கப்பட்டுள்ள புதிய வருகைகளுடன் திரைப்பட பட்டியல் காட்டப்படும், புதிதாக சேர்க்கப்பட்ட அனைத்து திரைப்படங்களையும் திரைப்பட சுவரொட்டிகளாகக் காட்டுகிறது',
			sinhala:
				'ඉහළ වම් මෙනුවෙහි NEW ARRIVALS ඉස්මතු කරමින් චිත්‍රපට නාමාවලිය ප්‍රදර්ශනය කෙරෙන අතර පහලින් කැරූසලයේ (Carousel) අලුතින් එකතු කරන ලද චිත්‍රපට චිත්‍රපට පෝස්ටර් ලෙස පෙන්වයි.',
		},
	},
	{
		tv: `${path_screens}/5.png`,
		instruction: {
			image: false,
			english: `MOVIE DESCRIPTION window on the Top Right Corner shows brief description of the highlighted movie.`,
			tamil:
				'மேல் இடது மெனு மற்றும் மூவி கொணர்வி ஆகியவற்றில் சிறப்பிக்கப்பட்டுள்ள புதிய வருகைகளுடன் திரைப்பட பட்டியல் காட்டப்படும், புதிதாக சேர்க்கப்பட்ட அனைத்து திரைப்படங்களையும் திரைப்பட சுவரொட்டிகளாகக் காட்டுகிறது',
			sinhala:
				'ඉහළ දකුණු කෙළවරේ ඇති චිත්‍රපට විස්තර කවුළුව ඉස්මතු කළ චිත්‍රපටය පිළිබඳ කෙටි විස්තරයක් පෙන්වයි.',
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
				'Use ↑ or ↓ buttons to navigate up or down TOP LEFT MENU until SINHALA is highlighted.',
			tamil:
				'சின்ஹாலா சிறப்பம்சமாக இருக்கும் வரை மேல் இடது மெனு வழியாக மேலே அல்லது கீழே செல்ல ↑ அல்லது ↓ பொத்தான்களைப் பயன்படுத்தவும்.',
			sinhala:
				'SINHALA ඉස්මතු වන තුරු ඉහළ වම් මෙනුවේ ඉහළට හෝ පහළට සැරිසැරීමට ↑ හෝ ↓ බොත්තම් භාවිතා කරන්න.',
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
				'Movie Catalogue is displayed with SINHALA highlighted in the Top Left Menu and carousel below showing list of genres such as FAMILY, COMEDY, CLASSIC etc. as further categories of Sinhala Language movies.  Use < or > buttons to navigate across the List of Genres in the carousel until FAMILY is highlighted',
			tamil:
				'மூவி வகைகளை அடிப்படையாகக் கொண்ட சிங்கள மொழி திரைப்படங்களின் மேலும் வகைகளாக FAMILY, COMEDY, CLASSIC போன்ற வகைகளின் பட்டியலைக் காட்டும் மேல் இடது மெனுவில் சிறப்பிக்கப்பட்ட சின்ஹாலா மற்றும் கொணர்வி மூலம் திரைப்பட பட்டியல் காட்டப்படும்.கொணர்விக்கு நடுவில் நீங்கள் விரும்பிய திரைப்படத்தை முன்னிலைப்படுத்த கொணர்வி முழுவதும் உலாவ <அல்லது> பொத்தான்களைப் பயன்படுத்தவும்.',
			sinhala:
				'ඉහළ වම් මෙනුවේ SINHALA ඉස්මතු වූ විට, ප්‍රභේද මත පදනම්ව සිංහල භාෂා චිත්‍රපට තවදුරටත් වර්ගීකරණය කිරීම සඳහා FAMILY, COMEDY, CLASSIC (පවුල, ප්‍රහසන, සම්භාව්‍ය) වැනි ප්‍රභේද ලැයිස්තුවක් පහත කැරූසලයේ ප්‍රදර්ශනය කෙරේ.             FAMILY (පවුල) ඉස්මතු වන තුරු කැරූසලයේ ප්‍රභේද ලැයිස්තුව හරහා සැරිසැරීමට < හෝ > බොත්තම් භාවිතා කරන්න',
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
				'Press OK Button to select FAMILY option to see movies under FAMILY genre.',
			tamil:
				'கிளாசிக் வகையின் கீழ் திரைப்படங்களைக் காண கிளாசிக் விருப்பத்தைத் தேர்ந்தெடுக்க சரி பொத்தானை அழுத்தவும்.',
			sinhala:
				'FAMILY ප්‍රභේදය යටතේ ඇති චිත්‍රපට බැලීමට FAMILY විකල්පය තේරීමට OK බොත්තම ඔබන්න.',
		},
	},

	{
		tv: `${path_screens}/9.png`,
		instruction: {
			image: false,
			english:
				'Movie Catalogue is displayed with FAMILY highlighted in the Top Left Menu and carousel below showing movies under FAMILY genre.                                             MOVIE DESCRIPTION window on the Top Right Corner shows brief description of the movie highlighted in the carousel',
			tamil:
				'மேல் இடது மெனுவில் சிறப்பிக்கப்பட்ட கிளாசிக் மற்றும் கீழே கொணர்வி மூலம் மூவி பட்டியல் காட்டப்படும், கிளாசிக் வகையின் கீழ் திரைப்படங்களை திரைப்பட சுவரொட்டிகளாகக் காட்டுகிறது மேல் வலது மூலையில் உள்ள திரைப்பட விவரம் சாளரம் கொணர்வியில் சிறப்பிக்கப்பட்ட திரைப்படத்தின் சுருக்கமான விளக்கத்தைக் காட்டுகிறது',
			sinhala:
				'ඉහළ වම් මෙනුවෙහි FAMILY ඉස්මතු කරමින් චිත්‍රපට නාමාවලිය ප්‍රදර්ශනය කෙරෙන අතර පහලින් කැරූසලයේ FAMILY ප්‍රභේදය යටතේ ඇති චිත්‍රපට පෙන්වයි.                                                                  කැරූසලයේ ඉස්මතු කළ චිත්‍රපටය පිළිබඳ කෙටි විස්තරයක් ඉහළ දකුණු කෙළවරේ ඇති චිත්‍රපට විස්තර කවුළුව පෙන්වයි',
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
				'Use < or > buttons to browse across carousel to highlight your desired movie in the middle of carousel ',
			tamil:
				'கொணர்விக்கு நடுவில் நீங்கள் விரும்பிய திரைப்படத்தை முன்னிலைப்படுத்த கொணர்வி முழுவதும் உலாவ <அல்லது> பொத்தான்களைப் பயன்படுத்தவும்',
			sinhala:
				'කැරූසලය මධ්‍යයේ ඔබ කැමති චිත්‍රපටය ඉස්මතු කිරීමට චිත්‍රපට කැරූසලය හරහා සැරිසැරීමට < හෝ > බොත්තම් භාවිතා කරන්න',
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
				'Press OK Button to see the synopsis of the movie highlighted in the carousel. ',
			tamil:
				'கொணர்வியில் சிறப்பிக்கப்பட்டுள்ள திரைப்படத்தின் சுருக்கத்தைக் காண சரி பொத்தானை அழுத்தவும்.',
			sinhala: 'කැරූසලයේ ඉස්මතු කළ චිත්‍රපටයේ සාරාංශය බැලීමට OK බොත්තම ඔබන්න.',
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
				'Synopsis of the highlighted movie is displayed in the bottom right.                                               MOVIE DESCRIPTION WINDOW on the Top Right Corner shows brief description of the movie, Rental Price and Rental Period',
			tamil:
				'மேல் வலது மூலையில் உள்ள திரைப்பட விவரம் சாளரம் சிறப்பம்சமாகக் காட்டப்பட்ட திரைப்படத்தின் சுருக்கமான விளக்கத்தைக் காட்டுகிறது திரைப்பட வாடகை விலை மற்றும் வாடகை காலம் மேல் வலது மூலையில் காட்டப்பட்டுள்ளது',
			sinhala:
				'ඉස්මතු කළ චිත්‍රපටයේ සාරාංශය පහල දකුණු කෙළවරේ පෙන්වයි.                                                            චිත්‍රපටයේ කෙටි විස්තරයක්, මිල සහ නැරඹීමට ඇති කාල සීමාව ඉහළ දකුණු කෙළවරේ ඇති චිත්‍රපට විස්තර කවුළුව පෙන්වයි.',
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
			sinhala: 'චිත්‍රපටය මිලදී ගැනීමට OK ඔබන්න.',
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
				'Movie Rental Price and Rental Period is shown.   Press OK Button again ',
			tamil: 'சரி பொத்தானை மீண்டும் அழுத்தவும்.',
			sinhala:
				'චිත්‍රපටයේ මිල සහ නැරඹීමට ඇති කාල සීමාව පෙන්වා ඇත.                 නැවත වාරයක් OK බොත්තම ඔබන්න',
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
			english: `Press 6 digit Purchase PIN (Default value is “111111”). Press OK Button to confirm.`,
			tamil: `6 இலக்க கொள்முதல் பின்னை அழுத்தவும் (இயல்புநிலை மதிப்பு “111111”) ,
			உறுதிப்படுத்த சரி பொத்தானை அழுத்தவும்.`,
			sinhala: `ඉලක්කම් හයේ මිලදී ගැනීමේ රහස් අංකය ඇතුලත් කරන්න (පෙරනිමි අගය “111111” වේ).   තහවුරු කිරීමට OK බොත්තම ඔබන්න`,
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
			english: 'Press OK Button to play the movie.',
			tamil: 'திரைப்படத்தை இயக்க சரி பொத்தானை அழுத்தவும்.',
			sinhala: 'චිත්‍රපටය නැරඹීමට OK බොත්තම ඔබන්න.',
		},
	},
	{
		tv: `${path_screens}/17.png`,
		instruction: {
			image: false,
			english: 'Enjoy!!',
			tamil: 'பத்திரிகை மெனு!',
			sinhala: 'රසවිඳින්න!!',
		},
	},
]

export default purchaseMovie 