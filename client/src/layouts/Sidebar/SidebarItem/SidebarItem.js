import clxs from 'clsx'
import './SidebarItem.scss'


function SidebarItem({ item, active, onClick }) {
    const classes = clxs("d-flex align-items-center gap-2 text-white nav-item ps-3", {
        active: active
    });
    return (
        <div className={classes} onClick={onClick}>
            <i className={item.icon}></i>
            <span className="fs-5 text-white">{item.title || "Title"}</span>
        </div>
    );
}
export default SidebarItem;
