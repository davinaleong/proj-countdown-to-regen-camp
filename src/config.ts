// src/config.ts

/**
 * ID of the HTML element where the countdown timer will be rendered.
 */
export const COUNTDOWN_ELEMENT_ID = "countdown"

/**
 * Initial placeholder text shown before the countdown starts updating.
 */
export const COUNTDOWN_TIMER_INITIAL_MESSAGE = "Loading timer..."

/**
 * Console log message for when the countdown completes.
 */
export const COUNTDOWN_FINISHED_LOG_MESSAGE = "Countdown finished!"

/**
 * Target datetime for countdown
 * Format: ISO 8601 string or Date object
 */
export const COUNTDOWN_TARGET = new Date("2025-08-12T17:00:00")

/**
 * Message to display when the countdown reaches the target date.
 */
export const COUNTDOWN_COMPLETION_MESSAGE = "Camp has started!!!"
