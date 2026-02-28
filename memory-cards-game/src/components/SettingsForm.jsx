import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from './Button'

const schema = yup.object({
    difficulty: yup.string().required(),
    speed: yup.number().min(300).max(2000).required(),
    twoPlayers: yup.boolean(),
})

/**
 * Форма налаштувань параметрів гри з валідацією через Yup.
 * * @component
 * @param {Object} props - Пропси компонента.
 * @param {Object} props.defaultValues - Початкові значення полів форми (difficulty, speed, twoPlayers).
 * @param {function} props.onSubmit - Функція, що викликається при успішній відправці форми.
 */
export default function SettingsForm({ defaultValues, onSubmit }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    })
  
    useEffect(() => {
        reset(defaultValues)
    }, [defaultValues, reset])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="settings-form">
            <h2>⚙️ Налаштування гри</h2>
            <label>Рівень складності</label>
            <select {...register('difficulty')}>
                <option value="easy">Легкий (4x2)</option>
                <option value="medium">Середній (4x4)</option>
                <option value="hard">Складний (6x4)</option>
            </select>
            <label>Швидкість перевороту (мс)</label>
            <input type="number" {...register('speed')} />
            <label>
                <input type="checkbox" {...register('twoPlayers')} />
                Режим двох гравців
            </label>

            <Button type="submit" style={{marginTop: '1rem'}}>💾 Зберегти</Button>
            {errors.speed && <p className="error">{'Швидкість має бути від 300 до 2000'}</p>}
        </form>
    )
}
