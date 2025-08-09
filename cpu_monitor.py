#!/usr/bin/env python3
"""Simple curses-based per-core CPU usage monitor."""

import curses
import psutil
import time


def draw(stdscr):
    curses.curs_set(0)
    while True:
        stdscr.erase()
        cpu_percents = psutil.cpu_percent(percpu=True)
        stdscr.addstr(0, 0, "CPU core load:")
        for i, percent in enumerate(cpu_percents):
            bar_len = int(percent / 4)  # 25 char width bar
            bar = "#" * bar_len
            stdscr.addstr(i + 1, 0, f"Core {i}: {percent:5.1f}% {bar}")
        stdscr.refresh()
        time.sleep(1)


if __name__ == "__main__":
    curses.wrapper(draw)
