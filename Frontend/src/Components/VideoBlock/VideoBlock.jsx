import './VideoBlock.css';

const VideoBlock = () => {
    return (
        <div className='VideoBlock--Container'>
            <div>
                <h1>Мы, Paged City</h1>
                <p>Мы по праву считаемся лучшей строительной компанией России</p>
            </div>

            <div className='VideoBlock--Container__VideoPlayer'>
                <iframe src="https://www.youtube.com/embed/22IFViiNMKY?si=e4EXo1qqkvrmL_Sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
}
export default VideoBlock;