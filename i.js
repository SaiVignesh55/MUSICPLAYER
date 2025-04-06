document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const favoriteBtn = document.getElementById('favorite-btn');
    const progress = document.getElementById('progress');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const currentSongTitle = document.getElementById('current-song-title');
    const currentSongArtist = document.getElementById('current-song-artist');
    const currentAlbumTitle = document.getElementById('current-album-title');
    const currentAlbumCover = document.getElementById('current-album-cover');
    const currentPlaylist = document.getElementById('current-playlist');
    const albumsGrid = document.getElementById('albums-grid');
    const favoritesList = document.getElementById('favorites-list');
    const navItems = document.querySelectorAll('nav ul li');
    const views = document.querySelectorAll('.view');
    const userIcon = document.getElementById('user-icon');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.querySelector('.close-modal');
    const loginForm = document.getElementById('login-form');
    const loginStatus = document.getElementById('login-status');

    // Music data
    const albums = [
        {
            id: 'album1',
            title: 'Devara',
            artist: 'Thaman S',
            coverUrl: 'images/de.jpg',
            songs: [
                { id: 'song1', title: 'Ayudha Pooja', artist: 'Anirudh Ravichander', duration: 210, url: 'songs/Ayudha Pooja.mp3' },
                { id: 'song2', title: 'Daavudi', artist: 'Anirudh Ravichander', duration: 195, url: 'songs/Daavudi.mp3' },
                { id: 'song3', title: 'Fear', artist: 'Anirudh Ravichander', duration: 180, url: 'songs/Fear.mp3' },
                { id: 'song7', title: 'Red Sea', artist: 'Anirudh Ravichander', duration: 215, url: 'songs/Red Sea.mp3' },
                { id: 'song8', title: 'All Hail The Tiger', artist: 'Anirudh Ravichander', duration: 205, url: 'songs/All Hail The Tiger.mp3' },
                { id: 'song9', title: 'Chuttamalle', artist: 'Anirudh Ravichander', duration: 190, url: 'songs/Chuttamalle.mp3' }
            ]
        },
        {
            id: 'album2',
            title: 'hi-NANNA',
            artist: 'Hashim',
            coverUrl: 'images/hi.jpg',
            songs: [
                { id: 'song4', title: 'Odiyamma', artist: 'Hashim', duration: 225, url: 'songs/Odiyamma.mp3' },
                { id: 'song5', title: 'Samayama', artist: 'Hashim', duration: 198, url: 'songs/Samayama.mp3' },
                { id: 'song6', title: 'Gaaju Bomma', artist: 'Hashim', duration: 187, url: 'songs/Gaaju Bomma.mp3' }
            ]
        },
        {
            id: 'album3',
            title: 'Bramhastra',
            artist: 'Arjith singh',
            coverUrl: 'images/bram.jpg',
            songs: [
                { id: 'song1', title: 'Kumkumala', artist: 'Arjith singh', duration: 210, url: 'songs/bramhastram/Kumkumala.mp3' },
                { id: 'song2', title: 'Deva Deva', artist: 'Arjith singh', duration: 195, url: 'songs/bramhastram/Deva Deva.mp3' },
                { id: 'song3', title: 'Allari Motha', artist: 'Arjith singh', duration: 180, url: 'songs/bramhastram/Allari Motha.mp3' }
            ]
        },
        {
            id: 'album4',
            title: 'Return of Dragon',
            artist: 'Sarath Santhosh',
            coverUrl: 'images/drag.jpg',
            songs: [
                { id: 'song1', title: 'Madhuvaramae', artist: 'Sarath Santhosh', duration: 210, url: 'songs/dragon/madhu.mp3' },
                { id: 'song2', title: 'Rise of Dragon', artist: 'Sarath Santhosh', duration: 195, url: 'songs/dragon/rise of.mp3' },
                { id: 'song3', title: 'Yendhukae', artist: 'Sarath Santhosh', duration: 180, url: 'songs/dragon/yendhuke.mp3' }
            ]     
        },
        {
            id: 'album5',
            title: 'Vikram-Hitlist',
            artist: 'Anirudh Ravichandran',
            coverUrl: 'images/vik.jpg',
            songs: [
                { id: 'song1', title: 'Vikram title song', artist: 'Anirudh Ravichander', duration: 210, url: 'songs/vikram/title.mp3' },
                { id: 'song2', title: 'once upon a time', artist: 'Anirudh Ravichander', duration: 195, url: 'songs/vikram/once.mp3' },
                { id: 'song3', title: 'Porata Simham', artist: 'Anirudh Ravichander', duration: 180, url: 'songs/vikram/porata.mp3' }
            ]
        },
    
    {
        id: 'album6',
        title: 'Orange',
        artist: 'Harris Jayaraj',
        coverUrl: 'images/orange.jpg',
        songs: [
            { id: 'song1', title: 'Rooba Rooba', artist: 'Karthik', duration: 240, url: 'songs/orange/rooba.mp3' },
            { id: 'song2', title: 'Nenu Nuvvantu', artist: 'Chinmayi', duration: 210, url: 'songs/orange/ola.mp3' },
            { id: 'song3', title: 'Hello Rammante', artist: 'Karunya', duration: 200, url: 'songs/orange/hello.mp3' }
        ]
    },
    {
        id: 'album7',
        title: 'Ambajipetta',
        artist: 'Keeravani',
        coverUrl: 'images/ambaji.jpg',
        songs: [
            { id: 'song1', title: 'Bhajan', artist: 'SP Balasubrahmanyam', duration: 220, url: 'songs/ambaji/gumma.mp3' },
        ]
    },
    {
        id: 'album8',
        title: 'Arya',
        artist: 'Devi Sri Prasad',
        coverUrl: 'images/arya.jpg',
        songs: [
            { id: 'song1', title: 'Feel My Love', artist: 'Karthik', duration: 230, url: 'songs/arya/feel my.mp3' },
            
        ]
    },
    {
        id: 'album9',
        title: 'Bommarillu',
        artist: 'Mickey J Meyer',
        coverUrl: 'images/bomma.jpg',
        songs: [
            { id: 'song1', title: 'Bomma Bomma', artist: 'Armaan Malik', duration: 240, url: 'songs/bomma/appudo.mp3' },
           
        ]
    },
    {
        id: 'album10',
        title: 'Geetha Govindham',
        artist: 'Gopi Sundar',
        coverUrl: 'images/geetha.jpg',
        songs: [
            { id: 'song1', title: 'Inkem Inkem', artist: 'Sid Sriram', duration: 250, url: 'songs/geetha/inkem.mp3' },
            { id: 'song2', title: 'Vachindamma', artist: 'Saketh', duration: 230, url: 'songs/geetha/vachindhamma.mp3' },
            { id: 'song3', title: 'Yenti Yenti', artist: 'Chinmayi', duration: 240, url: 'songs/geetha/yenti_yenti.mp3' }
        ]
    },
    {
        id: 'album11',
        title: 'Guntur',
        artist: 'S. Thaman',
        coverUrl: 'images/guntur.jpg',
        songs: [
            { id: 'song1', title: 'dummasala biryani', artist: 'Kailash Kher', duration: 260, url: 'songs/guntur/dum.mp3' },
            { id: 'song2', title: 'kurchini', artist: 'Anurag Kulkarni', duration: 240, url: 'songs/guntur/kurchi.mp3' },
            { id: 'song3', title: 'Nee Kanti', artist: 'Sid Sriram', duration: 250, url: 'songs/guntur/nee_kanti.mp3' }
        ]
    },
    {
        id: 'album12',
        title: 'Krishnarjunayudham',
        artist: 'Chakri',
        coverUrl: 'images/krishna.jpg',
        songs: [
            { id: 'song1', title: 'FLY ', artist: 'Vijay Yesudas', duration: 240, url: 'songs/krishna/fly.mp3' },
            { id: 'song2', title: 'MNASE', artist: 'Karthik', duration: 230, url: 'songs/krishna/manase.mp3' },
            
        ]
    },
    {
        id: 'album13',
        title: 'Master',
        artist: 'Anirudh Ravichander',
        coverUrl: 'images/master.jpg',
        songs: [
            { id: 'song1', title: 'Vaathi Coming', artist: 'Anirudh Ravichander', duration: 210, url: 'songs/master/vaathi_coming.mp3' },
            { id: 'song2', title: 'Kutti Story', artist: 'Vijay', duration: 200, url: 'songs/master/kutti_story.mp3' }
        ]
    },
    {
        id: 'album14',
        title: 'Mirchi',
        artist: 'Devi Sri Prasad',
        coverUrl: 'images/mirchi.jpg',
        songs: [
            { id: 'song1', title: 'Mirchi Title Song', artist: 'Chinmayi', duration: 220, url: 'songs/mirchi/title_song.mp3' },
            { id: 'song2', title: 'Idhedho Bagundhe', artist: 'Vijay Prakash', duration: 230, url: 'songs/mirchi/idhedho_bagundhe.mp3' }
        ]
    },
    {
        id: 'album15',
        title: 'Nani Gang',
        artist: 'Gopi Sundar',
        coverUrl: 'images/nanigang.jpg',
        songs: [
            { id: 'song1', title: 'Gang Leader Title Song', artist: 'Anirudh Ravichander', duration: 240, url: 'songs/nanigang/title_song.mp3' },
            { id: 'song2', title: 'Hoyna Hoyna', artist: 'Inno Genga', duration: 220, url: 'songs/nanigang/hoyna_hoyna.mp3' }
        ]
    },
    {
        id: 'album16',
        title: 'Nannaku Prematho',
        artist: 'Devi Sri Prasad',
        coverUrl: 'images/nannaku.jpg',
        songs: [
            { id: 'song1', title: 'Follow Follow', artist: 'Jr. NTR', duration: 210, url: 'songs/nannaku/follow_follow.mp3' },
            { id: 'song2', title: 'Love Dhebba', artist: 'Sooraj Santhosh', duration: 230, url: 'songs/nannaku/love_dhebba.mp3' }
        ]
    },
    {
        id: 'album17',
        title: 'Ori',
        artist: 'Thaman S',
        coverUrl: 'images/ori.jpg',
        songs: [
            { id: 'song1', title: 'Ori Devuda', artist: 'Sid Sriram', duration: 250, url: 'songs/ori/ori_devuda.mp3' },
            { id: 'song2', title: 'Avunanavaa', artist: 'Haricharan', duration: 240, url: 'songs/ori/avunanavaa.mp3' }
        ]
    },
    {
        id: 'album18',
        title: 'RRR',
        artist: 'M. M. Keeravani',
        coverUrl: 'images/rrr.jpg',
        songs: [
            { id: 'song1', title: 'Naatu Naatu', artist: 'Rahul Sipligunj', duration: 260, url: 'songs/rrr/naatu_naatu.mp3' },
            { id: 'song2', title: 'Dosti', artist: 'Amit Trivedi', duration: 240, url: 'songs/rrr/dosti.mp3' }
        ]
    },
    {
        id: 'album19',
        title: 'Taxi',
        artist: 'Gopi Sundar',
        coverUrl: 'images/taxi.jpg',
        songs: [
            { id: 'song1', title: 'Taxi Title Song', artist: 'Armaan Malik', duration: 220, url: 'songs/taxi/title_song.mp3' },
            { id: 'song2', title: 'Neeve Neeve', artist: 'Sid Sriram', duration: 230, url: 'songs/taxi/neeve_neeve.mp3' }
        ]
    },
    {
        id: 'album20',
        title: 'V',
        artist: 'Amit Trivedi',
        coverUrl: 'images/v.jpg',
        songs: [
            { id: 'song1', title: 'Manasu Maree', artist: 'Shashaa Tirupati', duration: 240, url: 'songs/v/manasu_maree.mp3' },
            { id: 'song2', title: 'Vishwaroopam', artist: 'Anirudh Ravichander', duration: 250, url: 'songs/v/vishwaroopam.mp3' }
        ]
    }
    ];

    // App state
    let currentAlbum = albums[0];
    let currentSongIndex = 0;
    let isPlaying = false;
    let favorites = [];
    let isLoggedIn = false;
    let username = '';
    let recentlyPlayed = [];

    const topCharts = [
        { title: 'Daavudi', artist: 'Ed Sheeran', album: 'Devara', url: 'songs/Daavudi.mp3', coverUrl: 'images/de.jpg' },
        { title: 'Samayama', artist: 'chakri', album: 'After Hours', url: 'songs/Samayama.mp3', coverUrl: 'images/hi.jpg' },
        { title: 'inkem', artist: 'chakri', album: 'Future Nostalgia', url: 'songs/inkem.mp3', coverUrl: 'images/geetha.jpg' },
        { title: 'Taxiwala', artist: 'Silpa', album: 'Stay', url: 'songs/maate.mp3', coverUrl: 'images/taxi.jpg' },
        { title: 'RRR', artist: 'DSP', album: 'RRR', url: 'songs/natu.mp3', coverUrl: 'images/rrr.jpg' },
    ];

    // Initialize the app
    function init() {
        loadAlbum(currentAlbum);
        renderAlbums();
        setupEventListeners();
        renderTopCharts(); // Initialize the top charts
    }
    // Load album and its songs
    function loadAlbum(album) {
        currentAlbum = album;
        currentSongIndex = 0;
        
        // Update UI
        currentAlbumTitle.textContent = album.title;
        currentAlbumCover.src = album.coverUrl;
        
        // Load first song
        loadSong(album.songs[0]);
        
        // Render playlist
        renderPlaylist();
    }

    // Load a specific song
    function loadSong(song, album = null) {
        currentSongTitle.textContent = song.title;
        currentSongArtist.textContent = song.artist;
    
        // Set the audio source
        audioPlayer.src = song.url;
    
        // Update UI
        updateFavoriteButton();
        resetProgress();
    
        if (album) {
            currentAlbum = album; // Update current album if provided
            currentAlbumTitle.textContent = album.title;
            currentAlbumCover.src = album.coverUrl;
        }
    
        if (isPlaying) {
            playAudio();
        }
    }
    // Play the current song
    function playAudio() {
        const currentSong = currentAlbum.songs[currentSongIndex];
        addToRecentlyPlayed(currentSong, currentAlbum);

        audioPlayer.play().catch(error => {
            console.error("Error playing audio:", error);
            startProgressSimulation();
        });
        
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playBtn.classList.add('playing');
        isPlaying = true;
    }

    // Pause the current song
    function pauseAudio() {
        audioPlayer.pause();
        
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        playBtn.classList.remove('playing');
        isPlaying = false;
        
        stopProgressSimulation();
    }

    // Play next song
    function playNext() {
        currentSongIndex = (currentSongIndex + 1) % currentAlbum.songs.length;
        loadSong(currentAlbum.songs[currentSongIndex]);
        highlightCurrentSong();
        
        if (isPlaying) {
            playAudio();
        }
    }

    // Play previous song
    function playPrev() {
        currentSongIndex = (currentSongIndex - 1 + currentAlbum.songs.length) % currentAlbum.songs.length;
        loadSong(currentAlbum.songs[currentSongIndex]);
        highlightCurrentSong();
        
        if (isPlaying) {
            playAudio();
        }
    }
    

    // Toggle favorite status for current song or specific song
    function toggleFavorite(songId) {
        const id = songId || currentAlbum.songs[currentSongIndex].id;
    
        if (favorites.includes(id)) {
            favorites = favorites.filter(fid => fid !== id);
        } else {
            favorites.push(id);
        }
    
        updateFavoriteButton(); // Update the favorite button for the current song
        renderFavorites(); // Re-render the favorites list
    }
    
    // Update favorite button based on current song
    function updateFavoriteButton() {
        const currentSong = currentAlbum.songs[currentSongIndex];
    
        if (favorites.includes(currentSong.id)) {
            favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
            favoriteBtn.classList.add('active');
        } else {
            favoriteBtn.innerHTML = '<i class="far fa-heart"></i>';
            favoriteBtn.classList.remove('active');
        }
    }
    
    // Render the current playlist
    function renderPlaylist() {
        currentPlaylist.innerHTML = '';
        
        currentAlbum.songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.className = index === currentSongIndex ? 'active' : '';
            li.dataset.index = index;
            
            li.innerHTML = `
                <div class="song-info">
                    <span class="song-number">${index + 1}</span>
                    <div class="song-title-artist">
                        <h4>${song.title}</h4>
                        <p>${song.artist}</p>
                    </div>
                </div>
                <div class="song-actions">
                    <button class="favorite-song ${favorites.includes(song.id) ? 'active' : ''}" data-id="${song.id}">
                        <i class="${favorites.includes(song.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
            `;
            
            currentPlaylist.appendChild(li);
        });
    }

    // Render all albums
    function renderAlbums() {
        albumsGrid.innerHTML = '';
        
        albums.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.className = 'album-card';
            albumCard.dataset.id = album.id;
            
            albumCard.innerHTML = `
                <img src="${album.coverUrl}" alt="${album.title}">
                <div class="play-overlay"><i class="fas fa-play"></i></div>
                <div class="album-info">
                    <h3>${album.title}</h3>
                    <p>${album.artist}</p>
                </div>
            `;
            
            albumsGrid.appendChild(albumCard);
        });
    }

    // Render favorites list
    function renderFavorites() {
        favoritesList.innerHTML = '';
    
        if (favorites.length === 0) {
            favoritesList.innerHTML = '<p class="text-center p-4">No favorites yet. Add some songs to your favorites!</p>';
            return;
        }
    
        const favoriteSongs = albums.flatMap(album =>
            album.songs.filter(song => favorites.includes(song.id)).map(song => ({
                ...song,
                albumTitle: album.title,
                albumId: album.id
            }))
        );
    
        favoriteSongs.forEach((song, index) => {
            const li = document.createElement('li');
    
            li.innerHTML = `
                <div class="song-info">
                    <span class="song-number">${index + 1}</span>
                    <div class="song-title-artist">
                        <h4>${song.title}</h4>
                        <p>${song.artist} • ${song.albumTitle}</p>
                    </div>
                </div>
                <div class="song-actions">
                    <button class="play-favorite" data-album="${song.albumId}" data-song="${song.id}">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="remove-favorite" data-id="${song.id}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
    
            favoritesList.appendChild(li);
        });
    }
    

    // Search functionality
    function setupSearch() {
        const searchInput = document.getElementById('search-input');
        let searchTimeout;

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const query = e.target.value.toLowerCase().trim();
                if (query.length >= 2) {
                    performSearch(query);
                    switchView('search-results');
                }
            }, 300);
        });
    }

    function performSearch(query) {
        const songResults = document.getElementById('song-results');
        const albumResults = document.getElementById('album-results');
        
        const matchingSongs = [];
        const matchingAlbums = [];

        albums.forEach(album => {
            if (album.title.toLowerCase().includes(query) || 
                album.artist.toLowerCase().includes(query)) {
                matchingAlbums.push(album);
            }

            album.songs.forEach(song => {
                if (song.title.toLowerCase().includes(query) || 
                    song.artist.toLowerCase().includes(query)) {
                    matchingSongs.push({...song, albumTitle: album.title, albumId: album.id});
                }
            });
        });

        renderSearchResults(songResults, matchingSongs, 'songs');
        renderSearchResults(albumResults, matchingAlbums, 'albums');
    }
//sarch render
    function renderSearchResults(container, results, type) {
        container.innerHTML = '';
    
        if (results.length === 0) {
            container.innerHTML = `<p class="no-results">No ${type} found</p>`;
            return;
        }
    
        if (type === 'songs') {
            results.forEach((song, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <div class="song-info">
                        <span class="song-number">${index + 1}</span>
                        <div class="song-title-artist">
                            <h4>${song.title}</h4>
                            <p>${song.artist} • ${song.albumTitle}</p>
                        </div>
                    </div>
                    <div class="song-actions">
                        <button class="play-search-result" data-album="${song.albumId}" data-song="${song.id}">
                            <i class="fas fa-play"></i>
                        </button>
                        <button class="favorite-song ${favorites.includes(song.id) ? 'active' : ''}" data-id="${song.id}">
                            <i class="${favorites.includes(song.id) ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                `;
                container.appendChild(li);
            });
        } else {
            results.forEach(album => {
                const albumCard = document.createElement('div');
                albumCard.className = 'album-card';
                albumCard.dataset.id = album.id;
    
                albumCard.innerHTML = `
                    <img src="${album.coverUrl}" alt="${album.title}">
                    <div class="album-info">
                        <h3>${album.title}</h3>
                        <p>${album.artist}</p>
                    </div>
                `;
    
                // Add click event listener for album card
                albumCard.addEventListener('click', () => {
                    loadAlbum(album); // Load the selected album
                    switchView('home'); // Switch to home view
                });
    
                container.appendChild(albumCard);
            });
        }
    }

    // Highlight current song in playlist
    function highlightCurrentSong() {
        const playlistItems = currentPlaylist.querySelectorAll('li');
        
        playlistItems.forEach((item, index) => {
            if (index === currentSongIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Switch between views
    function switchView(viewId) {
        views.forEach(view => {
            view.classList.add('hidden');
        });
        
        document.getElementById(`${viewId}-view`).classList.remove('hidden');
        
        navItems.forEach(item => {
            if (item.dataset.view === viewId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Format time (seconds to MM:SS)
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Reset progress bar
    function resetProgress() {
        progress.style.width = '0%';
        currentTimeEl.textContent = '0:00';
        
        const currentSong = currentAlbum.songs[currentSongIndex];
        
        if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
            durationEl.textContent = formatTime(audioPlayer.duration);
        } else {
            durationEl.textContent = formatTime(currentSong.duration);
        }
    }

    // Progress simulation variables
    let progressInterval;
    let currentProgress = 0;

    // Start progress simulation
    function startProgressSimulation() {
        stopProgressSimulation();
        
        const currentSong = currentAlbum.songs[currentSongIndex];
        const duration = currentSong.duration;
        currentProgress = 0;
        
        progressInterval = setInterval(() => {
            currentProgress += 1;
            const progressPercent = (currentProgress / duration) * 100;
            
            progress.style.width = `${progressPercent}%`;
            currentTimeEl.textContent = formatTime(currentProgress);
            
            if (currentProgress >= duration) {
                clearInterval(progressInterval);
                playNext();
            }
        }, 1000);
    }

    // Stop progress simulation
    function stopProgressSimulation() {
        clearInterval(progressInterval);
    }

    // Update progress based on audio time
    function updateProgress() {
        if (audioPlayer.duration) {
            const currentTime = audioPlayer.currentTime;
            const duration = audioPlayer.duration;
            const progressPercent = (currentTime / duration) * 100;
            
            progress.style.width = `${progressPercent}%`;
            currentTimeEl.textContent = formatTime(currentTime);
            durationEl.textContent = formatTime(duration);

            // Add a glowing effect when the progress bar is actively updating
            progress.classList.add('active');
            setTimeout(() => progress.classList.remove('active'), 200);
        }
    }

    // Handle progress bar click
    function handleProgressClick(e) {
        const progressBarWidth = progressBar.offsetWidth;
        const clickPosition = e.offsetX;
        const clickPercent = clickPosition / progressBarWidth;
        
        if (audioPlayer.duration) {
            audioPlayer.currentTime = clickPercent * audioPlayer.duration;
        } else {
            const currentSong = currentAlbum.songs[currentSongIndex];
            const duration = currentSong.duration;
            currentProgress = Math.floor(clickPercent * duration);
            
            progress.style.width = `${clickPercent * 100}%`;
            currentTimeEl.textContent = formatTime(currentProgress);
        }
    }

    // Handle login
    function handleLogin(e) {
        e.preventDefault();

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        if (usernameInput && passwordInput) {
            isLoggedIn = true;
            username = usernameInput;
            loginStatus.innerHTML = `<span>Welcome, ${username}</span>`;
            document.getElementById('logout-btn').classList.remove('hidden');
            closeLoginModal();
        } else {
            alert('Please enter both username and password.');
        }
    }

    // Handle logout
    function handleLogout() {
        isLoggedIn = false;
        username = '';
        favorites = [];
        loginStatus.innerHTML = '<span>👤 Not logged in</span>';
        document.getElementById('logout-btn').classList.add('hidden');
        renderFavorites();
        updateFavoriteButton();
        switchView('home');
    }

    // Remove backend session check
    function checkSession() {
        // No backend session check needed
    }

    // Initialize session check
    document.addEventListener('DOMContentLoaded', () => {
        checkSession();
    });

    // Open login modal
    function openLoginModal() {
        loginModal.classList.add('active');
    }

    // Close login modal
    function closeLoginModal() {
        loginModal.classList.remove('active');
    }

    // Add a song to the recently played list
    function addToRecentlyPlayed(song, album) {
        const songData = {
            title: song.title,
            artist: song.artist,
            albumTitle: album.title,
            albumId: album.id,
            songId: song.id,
        };
    
        // Avoid duplicates
        recentlyPlayed = recentlyPlayed.filter(
            (item) => item.songId !== song.id || item.albumId !== album.id
        );
    
        // Add to the beginning of the list
        recentlyPlayed.unshift(songData);
    
        // Limit the list to the last 10 songs
        if (recentlyPlayed.length > 10) {
            recentlyPlayed.pop();
        }
    
        renderRecentlyPlayed();
    }
    
    // Render the recently played list
    function renderRecentlyPlayed() {
        const recentlyPlayedList = document.getElementById('recently-played-list');
        recentlyPlayedList.innerHTML = '';
    
        if (recentlyPlayed.length === 0) {
            recentlyPlayedList.innerHTML = '<p class="text-center p-4">No songs played recently.</p>';
            return;
        }
    
        recentlyPlayed.forEach((song, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="song-info">
                    <span class="song-number">${index + 1}</span>
                    <div class="song-title-artist">
                        <h4>${song.title}</h4>
                        <p>${song.artist} • ${song.albumTitle}</p>
                    </div>
                </div>
            `;
            recentlyPlayedList.appendChild(li);
        });
    }

    // Render the top charts list
    function renderTopCharts() {
        const topChartsList = document.getElementById('top-charts-list');
        topChartsList.innerHTML = '';
    
        topCharts.forEach((song, index) => {
            const li = document.createElement('li');
            li.dataset.url = song.url; // Store the song URL in a data attribute
            li.dataset.coverUrl = song.coverUrl; // Store the cover URL in a data attribute
            li.innerHTML = `
                <div class="song-info">
                    <img src="${song.coverUrl}" alt="${song.title}" class="song-cover">
                    <div class="song-title-artist">
                        <h4>${song.title}</h4>
                        <p>${song.artist} • ${song.album}</p>
                    </div>
                </div>
            `;
            topChartsList.appendChild(li);
        });
    
        // Add click event listener to play songs from Top Charts
        topChartsList.addEventListener('click', (e) => {
            const listItem = e.target.closest('li');
            if (listItem && listItem.dataset.url) {
                playTopChartSong(
                    listItem.dataset.url,
                    listItem.querySelector('.song-title-artist h4').textContent,
                    listItem.querySelector('.song-title-artist p').textContent,
                    listItem.dataset.coverUrl // Pass the cover URL
                );
            }
        });
    }
    
    // Play a song from Top Charts
    function playTopChartSong(url, title, artist, coverUrl) {
        currentSongTitle.textContent = title;
        currentSongArtist.textContent = artist;
        currentAlbumTitle.textContent = 'Top Charts';
        currentAlbumCover.src = coverUrl; // Set the correct album cover
    
        audioPlayer.src = url;
        playAudio();
    }

    // Set up all event listeners
    function setupEventListeners() {
        // Audio events
        audioPlayer.addEventListener('timeupdate', updateProgress);
        audioPlayer.addEventListener('ended', playNext);
        audioPlayer.addEventListener('loadedmetadata', () => {
            durationEl.textContent = formatTime(audioPlayer.duration);
        });
        
        // Player controls
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                pauseAudio();
            } else {
                playAudio();
            }
        });
        
        nextBtn.addEventListener('click', playNext);
        prevBtn.addEventListener('click', playPrev);
        favoriteBtn.addEventListener('click', () => {
            const currentSong = currentAlbum.songs[currentSongIndex];
            toggleFavorite(currentSong.id); // Pass the current song ID to toggleFavorite
        });
        progressBar.addEventListener('click', handleProgressClick);
        
        // Navigation
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                switchView(item.dataset.view);
            });
        });
        
        // Album selection
        albumsGrid.addEventListener('click', (e) => {
            const albumCard = e.target.closest('.album-card');
            if (albumCard) {
                const albumId = albumCard.dataset.id;
                const album = albums.find(a => a.id === albumId);
                if (album) {
                    loadAlbum(album);
                    switchView('home');
                }
            }
        });
        
        // Playlist interactions
        currentPlaylist.addEventListener('click', (e) => {
            const listItem = e.target.closest('li');
            if (listItem) {
                const index = parseInt(listItem.dataset.index);
                if (!isNaN(index)) {
                    currentSongIndex = index;
                    loadSong(currentAlbum.songs[index]);
                    highlightCurrentSong();
                    playAudio();
                }
            }
        
            const favoriteBtn = e.target.closest('.favorite-song');
            if (favoriteBtn) {
                e.stopPropagation();
                const songId = favoriteBtn.dataset.id;
                toggleFavorite(songId);
            }
        });
        
        // Favorites interactions
        favoritesList.addEventListener('click', (e) => {
            const playBtn = e.target.closest('.play-favorite');
            if (playBtn) {
                const albumId = playBtn.dataset.album;
                const songId = playBtn.dataset.song;
        
                const album = albums.find(a => a.id === albumId);
                if (album) {
                    currentAlbum = album;
                    const songIndex = album.songs.findIndex(s => s.id === songId);
                    if (songIndex !== -1) {
                        currentSongIndex = songIndex;
                        loadSong(album.songs[songIndex]);
                        renderPlaylist();
                        highlightCurrentSong();
                        playAudio();
                        switchView('home');
                    }
                }
            }
        
            const removeBtn = e.target.closest('.remove-favorite');
            if (removeBtn) {
                const songId = removeBtn.dataset.id;
                toggleFavorite(songId);
            }
        });
        
        // Search functionality
        setupSearch();
        
        // Search results interactions
        document.getElementById('song-results').addEventListener('click', (e) => {
            const playBtn = e.target.closest('.play-search-result');
            if (playBtn) {
                const albumId = playBtn.dataset.album;
                const songId = playBtn.dataset.song;
        
                const album = albums.find(a => a.id === albumId);
                if (album) {
                    const song = album.songs.find(s => s.id === songId);
                    if (song) {
                        loadSong(song, album); // Pass the album to loadSong
                        renderPlaylist();
                        highlightCurrentSong();
                        playAudio();
                        switchView('home');
                    }
                }
            }
            
            const favoriteBtn = e.target.closest('.favorite-song');
            if (favoriteBtn) {
                const songId = favoriteBtn.dataset.id;
                toggleFavorite(songId);
                renderSearchResults(document.getElementById('song-results'), 
                                 getCurrentSearchResults(), 'songs');
            }
        });
        
        // User authentication
        userIcon.addEventListener('click', () => {
            if (!isLoggedIn) {
                openLoginModal();
            }
        });
        
        closeModal.addEventListener('click', closeLoginModal);
        loginForm.addEventListener('submit', handleLogin);
        
        // Logout
        document.getElementById('logout-btn').addEventListener('click', handleLogout);
    }

    // Helper function to get current search results
    function getCurrentSearchResults() {
        const query = document.getElementById('search-input').value.toLowerCase().trim();
        const results = [];
        
        albums.forEach(album => {
            album.songs.forEach(song => {
                if (song.title.toLowerCase().includes(query) || 
                    song.artist.toLowerCase().includes(query)) {
                    results.push({...song, albumTitle: album.title, albumId: album.id});
                }
            });
        });
        
        return results;
    }

    // Initialize the app
    init();
});