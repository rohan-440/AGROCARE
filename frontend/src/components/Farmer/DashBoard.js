
import SideBar from "./SideBar";


function Dashboard() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <SideBar />
                </aside>
                <section className="col-md-9">
                    <h1>Welcome to AgroCare! </h1>
                    <div>
                        <div className="text-center">
                            <img src="dash.png" className="rounded" alt="..." />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Dashboard;