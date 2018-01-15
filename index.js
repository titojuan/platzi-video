import React from 'react'; //CREAC COMPONENTES
import ReactDOM from 'react-dom'; //RENDERIZAR COMPONENTES EN NAVEGADOR
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json'

const APP = document.getElementById('app');

ReactDOM.render(<Playlist data={data} />, APP)
