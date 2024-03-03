import TOC from '@/components/TOC'

const Layout = ({children}) => {
    
    return (
        <div>
            <TOC/>
            {children}
        </div>
    )
}

export default Layout;