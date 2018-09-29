module.exports=(model)=>`
<track>
	<location>${model.location}</location>
	<extension application="http://www.videolan.org/vlc/playlist/0">
		<vlc:id>${model.index}</vlc:id>
	</extension>
</track>`