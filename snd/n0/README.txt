part of the issue is that the position of sources affects the mix. 

the other thing is that the visualizer can't share the audio with resonance, so the chords are not spatial.

///

for f in *.wav; do ffmpeg -i "$f" -c:a libmp3lame -q:a 2 "${f/%wav/mp3}"; done

use to batch convert wav to mp3
https://superuser.com/questions/373889/batch-convert-wav-to-mp3-and-ogg
