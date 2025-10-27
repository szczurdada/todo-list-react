export interface HeaderProps {
    isDark: boolean;
    onToggle: () => void;
    searchInput: string;
    setSearchInput: (searchInput: string) => void;
}