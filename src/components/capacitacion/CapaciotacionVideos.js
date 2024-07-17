import { Text, View, StyleSheet } from 'react-native'

import { API_URL } from '../../constants'
import Video from 'react-native-video'

export const CapaciotacionVideos = ({ videos }) => {
	return (
		<>
			{videos.map((video, idx) => (
				<View key={video.id} style={styles.container}>
					<Text>
						{idx + 1}. {video.title}
					</Text>

					<Video
						source={{
							uri: `${API_URL}/api/uploads-flitgo/${video.file.content_path}`
						}}
						style={styles.video}
						controls={true}
						paused={true}
						resizeMode='contain'
					/>
				</View>
			))}
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: 20
	},
	video: {
		width: '100%',
		height: 200
	}
})
