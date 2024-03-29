export default function Skills() {
    return (
        <div className="skills">
            <div className="graphicDesign">
                <img src="/images/graphic-design-logo.png" alt="skills img" />
                <h3>Grafik Tasarım</h3>
            </div>
            <div className="UIUX-Apps-Illustrations">
                <div className="UXUI">
                    <div className="UIUX">
                        <img src="/images/UIUX-logo.png" alt="skills img" />
                        <h3>UI/UX</h3>
                    </div>
                    <div className="apps">
                        <img src="/images/apps-logo.png" alt="skills img" />
                        <h3>Apps</h3>
                    </div>
                </div>
                <div className="illustration">
                    <img src="/images/illustrations-logo.png" alt="skills img" />
                    <h3>Çizimler</h3>
                </div>
            </div>
            <div className="photo-motiongraphics">
                <div className="photography">
                    <img src="/images/photography-logo.png" alt="skills img" />
                    <h3>Fotoğrafçılık</h3>
                </div>
                <div className="motionGraphics">
                    <img src="/images/motion-graphics-logo.png" alt="skills img" />
                    <h3>Hareketli Grafikler</h3>
                </div>
            </div>
        </div>
    )
}