import {
    Package,
    Paintbrush,
    AlertCircle,
    Dog,
    TestTube,
    TestTube2,
    Send,
    Router,
    Atom,
    Calendar,
    Database,
    FormInput,
    Shield,
    ScrollText,
    Combine,
    Component,
    Boxes,
    BoxIcon,
    GitCommit,
    Languages,
    Globe,
    ArrowLeft,
    Search,
    Loader2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { atom, useAtom } from 'jotai';
import { cn } from './utils/cn/cn';
import { useQuery } from '@tanstack/react-query';
import { useVirtualizer } from '@tanstack/react-virtual';
import dayjs from 'dayjs';
import ky from 'ky';
import { useRef, useState } from 'react';
import { Routes, Route, useNavigate, Link, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const languageAtom = atom<'ko' | 'en'>('en');

const libraries = [
    { name: 'Tailwind CSS', icon: <Paintbrush size={18} /> },
    { name: 'ESLint', icon: <AlertCircle size={18} /> },
    { name: 'Prettier', icon: <Component size={18} /> },
    { name: 'Commitlint', icon: <GitCommit size={18} /> },
    { name: 'Husky', icon: <Dog size={18} /> },
    { name: 'Vitest', icon: <TestTube size={18} /> },
    { name: 'Testing Library', icon: <TestTube2 size={18} /> },
    { name: 'LintStaged', icon: <Shield size={18} /> },
    { name: 'Ky', icon: <Send size={18} /> },
    { name: 'React Router', icon: <Router size={18} /> },
    { name: 'Jotai', icon: <Atom size={18} /> },
    { name: 'Dayjs', icon: <Calendar size={18} /> },
    { name: 'TanStack Query', icon: <Database size={18} /> },
    { name: 'TanStack Form', icon: <FormInput size={18} /> },
    { name: 'Zod', icon: <Shield size={18} /> },
    { name: 'TanStack Virtual', icon: <ScrollText size={18} /> },
    { name: 'Tailwind Merge', icon: <Combine size={18} /> },
    { name: 'Clsx', icon: <Boxes size={18} /> },
    { name: 'Lucide Icons', icon: <BoxIcon size={18} /> },
    { name: 'MSW', icon: <TestTube size={18} /> },
    { name: 'i18next', icon: <Languages size={18} /> },
] as const;

interface StarWarsCharacter {
    name: string;
    birth_year: string;
    gender: string;
    height: string;
    mass: string;
    hair_color: string;
    eye_color: string;
}

const messageSchema = z.object({
    message: z
        .string()
        .min(1, { message: 'Please enter a message' })
        .refine((value) => !value.toLowerCase().includes('fuck'), {
            message: 'There is inappropriate word in your message',
        }),
});

type FormData = z.infer<typeof messageSchema>;

const HomePage = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useAtom(languageAtom);
    const parentRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(messageSchema),
    });

    // Mock API call using ky
    const { data: apiVersion } = useQuery({
        queryKey: ['version'],
        queryFn: async () => {
            const response = await ky.get('https://api.github.com/zen').text();
            return response;
        },
    });

    // 스타워즈 캐릭터 검색
    const { data: characters, isLoading } = useQuery({
        queryKey: ['starwars', searchQuery],
        queryFn: async () => {
            if (!searchQuery.trim()) return [];
            const response = await ky
                .get(`https://swapi.dev/api/people/?search=${searchQuery}`)
                .json<{ results: StarWarsCharacter[] }>();
            return response.results;
        },
        enabled: !!searchQuery.trim(),
    });

    const rowVirtualizer = useVirtualizer({
        count: libraries.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 70,
    });

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ko' : 'en';
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    const onSubmit = (data: FormData) => {
        alert(`message: ${data.message}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
            <div className="mx-auto max-w-4xl">
                {/* Language Toggle */}
                <button
                    onClick={toggleLanguage}
                    className={cn(
                        'fixed right-8 top-8 flex items-center gap-2 rounded-full',
                        'bg-white/70 px-4 py-2 backdrop-blur-sm transition-all',
                        'hover:bg-white/90 hover:shadow-lg'
                    )}
                >
                    <Globe size={16} className="text-indigo-600" />
                    <span className="font-medium text-indigo-900">
                        {language.toUpperCase()}
                    </span>
                </button>

                {/* Header Section */}
                <div className="relative mb-12 pt-12">
                    <div className="absolute -left-4 -top-4 size-40 rounded-full bg-gradient-to-br from-indigo-200/40 to-purple-200/40 blur-3xl"></div>
                    <div className="relative flex flex-col items-center">
                        <Package className="mb-6 size-16 text-indigo-600" />
                        <h1 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-center font-square text-5xl font-black text-transparent">
                            {t('title')}
                        </h1>
                        <p className="text-center font-unifont text-xl text-gray-600">
                            {t('subtitle')}
                        </p>
                        <div className="mt-4 rounded-full bg-indigo-50 px-4 py-1 text-sm text-indigo-600">
                            {dayjs().format('YYYY-MM-DD')}
                        </div>
                    </div>
                </div>

                <div className="space-y-8 rounded-2xl bg-white/70 p-8 shadow-xl backdrop-blur-sm">
                    {/* Star Wars Search */}
                    <div>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-xl border-2 border-transparent bg-white p-4 pl-12 shadow-md transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
                                placeholder={t('searchStarWars')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                        </div>
                        {searchQuery && (
                            <div className="mt-2 max-h-64 overflow-auto rounded-xl border border-gray-100 bg-white shadow-lg">
                                {isLoading ? (
                                    <div className="flex items-center justify-center p-4">
                                        <Loader2 className="mr-2 size-5 animate-spin text-indigo-600" />
                                        <span className="text-gray-600">
                                            {t('loading')}...
                                        </span>
                                    </div>
                                ) : characters?.length ? (
                                    characters.map((character) => (
                                        <div
                                            key={character.name}
                                            className="cursor-pointer border-b border-gray-100 p-4 transition-colors hover:bg-indigo-50"
                                            onClick={() => {
                                                navigate(
                                                    `/character/${encodeURIComponent(character.name)}`
                                                );
                                            }}
                                        >
                                            <div className="font-medium text-gray-900">
                                                {character.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {t('birthYear')}:{' '}
                                                {character.birth_year}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-center text-gray-500">
                                        {t('noResults')}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Message Form */}
                    <div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-2"
                        >
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    className={cn(
                                        'flex-1 rounded-xl border-2 border-transparent bg-white p-4 shadow-md transition-all placeholder:text-gray-400',
                                        'focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20',
                                        errors.message &&
                                            'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                    )}
                                    placeholder={t('enterMessage')}
                                    {...register('message')}
                                />
                                <button
                                    type="submit"
                                    className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 font-medium text-white shadow-md transition-all hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg active:scale-95"
                                >
                                    {t('submit')}
                                </button>
                            </div>
                            {errors.message && (
                                <p className="text-sm text-red-500">
                                    {errors.message.message}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Libraries Section */}
                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {t('libraries')}
                            </h2>
                            <span className="rounded-full bg-indigo-100 px-4 py-1 font-medium text-indigo-600">
                                {libraries.length} {t('tools')}
                            </span>
                        </div>
                        <div
                            ref={parentRef}
                            className="h-96 overflow-auto rounded-xl bg-white shadow-inner"
                        >
                            <div
                                className="relative"
                                style={{
                                    height: `${rowVirtualizer.getTotalSize()}px`,
                                }}
                            >
                                {rowVirtualizer
                                    .getVirtualItems()
                                    .map((virtualItem) => (
                                        <div
                                            key={virtualItem.key}
                                            className={cn(
                                                'absolute left-0 top-0 w-full',
                                                'group rounded-xl p-4 transition-all hover:bg-indigo-50'
                                            )}
                                            style={{
                                                height: virtualItem.size,
                                                transform: `translateY(${virtualItem.start}px)`,
                                            }}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 shadow-sm transition-all group-hover:bg-indigo-200">
                                                    {
                                                        libraries[
                                                            virtualItem.index
                                                        ].icon
                                                    }
                                                </div>
                                                <span className="font-medium text-gray-900">
                                                    {
                                                        libraries[
                                                            virtualItem.index
                                                        ].name
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {apiVersion && (
                        <div className="mt-8 text-center">
                            <div className="inline-block rounded-lg bg-gray-50 px-4 py-2 text-sm text-gray-500">
                                {apiVersion}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CharacterDetailPage = () => {
    const { name } = useParams<{ name: string }>();
    const { t } = useTranslation();

    const { data: character, isLoading } = useQuery({
        queryKey: ['character', name],
        queryFn: async () => {
            const response = await ky
                .get(`https://swapi.dev/api/people/?search=${name}`)
                .json<{ results: StarWarsCharacter[] }>();
            return response.results[0];
        },
        enabled: !!name,
    });

    if (isLoading)
        return <div className="p-8 text-center">{t('loading')}...</div>;
    if (!character)
        return <div className="p-8 text-center">{t('characterNotFound')}</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
            <div className="mx-auto max-w-2xl">
                <Link
                    to="/"
                    className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-indigo-600 backdrop-blur-sm transition-all hover:bg-white/90 hover:shadow-lg"
                >
                    <ArrowLeft size={16} />
                    {t('backToHome')}
                </Link>
                <div className="overflow-hidden rounded-2xl bg-white/70 shadow-xl backdrop-blur-sm">
                    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white">
                        <div className="absolute -left-4 -top-4 size-40 rounded-full bg-white/10 blur-2xl"></div>
                        <h1 className="relative text-4xl font-bold">
                            {character.name}
                        </h1>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {[
                            {
                                label: t('birthYear'),
                                value: character.birth_year,
                            },
                            { label: t('gender'), value: character.gender },
                            {
                                label: t('height'),
                                value: `${character.height}cm`,
                            },
                            { label: t('mass'), value: `${character.mass}kg` },
                            {
                                label: t('hairColor'),
                                value: character.hair_color,
                            },
                            {
                                label: t('eyeColor'),
                                value: character.eye_color,
                            },
                        ].map(({ label, value }) => (
                            <div
                                key={label}
                                className="grid grid-cols-2 gap-4 p-6"
                            >
                                <div className="text-gray-500">{label}</div>
                                <div className="font-medium text-gray-900">
                                    {value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:name" element={<CharacterDetailPage />} />
        </Routes>
    );
};

export default App;
