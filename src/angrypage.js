import GameSlider from "./components/gameslider";
import MusicSection from "./components/musicsection";
import ExerciseGallery from "./components/exercisegallery";


export const Angrypage = function(){
    return (
        <div className="">
        <div className="max-w-6xl  ">
          <GameSlider />
          <MusicSection />
          <ExerciseGallery />
        </div>
      </div>
    )
} 