const Header = () => {
    return (
        <div className="header">
            <picture>
                <source srcSet="./images/bg-header-desktop.svg" media="(min-width: 650px)" />
                <img src="./images/bg-header-mobile.svg" alt="bg-header-mobile" />
            </picture>

        </div>
    )
}

export default Header