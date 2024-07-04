import React, {useEffect} from 'react'
import useThemeStore from '../../app/useThemeStore'
// import useTheme from '../contexts/Theme';

export default function ThemeBtn() {

    const {theme, lightTheme, darkTheme} = useThemeStore(state => state.theme)
    
    
    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark') 
        document.querySelector('html').classList.add(theme)
      },[theme])

    // const {themeMode, lightTheme, darkTheme} = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme() 
        } else {
            lightTheme()
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={theme=== "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-100 dark:peer-focus:ring-[#4CAF4F] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
            {/* <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span> */}
        </label>
    );
}
