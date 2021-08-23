import gps
import time


def main():
    session = gps.gps("127.0.0.1", "2947")
    session.stream(gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)
    raw_data = session.next()
    if raw_data["class"] == "TPV":
        print(raw_data)

if __name__ == "__main__":
    main()
