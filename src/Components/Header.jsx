const Header = () => {
    return (
        <div className="">
            <picture>
                <source srcSet="./images/bg-header-desktop.svg" media="(min-width: 1024px)" />
                <img src="./images/bg-header-mobile.svg" alt="bg-header-mobile" />
            </picture>

        </div>
    )
}

export default Header