import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    difficulty: yup.string().required(),
    speed: yup.number().min(300).max(2000).required(),
    twoPlayers: yup.boolean(),
})

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

        <button type="submit">💾 Зберегти</button>

        {errors.speed && <p className="error">Швидкість має бути від 300 до 2000</p>}
        </form>
    )
}
