#!/usr/bin/python
# -*- coding: utf-8 -*-
import gps
import time
session = gps.gps('127.0.0.1', '2947')
session.stream(gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)

    try:
        time.sleep(0.5)
        raw_data = session.next()
        result = {}
        print str(result)
        if raw_data['class'] == 'TPV':
            if hasattr(raw_data, 'lat'):
                result["lat"] = str(raw_data.lat)
                print 'Latitude is = ' + str(raw_data.lat)
        if raw_data['class'] == 'TPV':
            if hasattr(raw_data, 'lon'):
                result["lon"] = str(raw_data.lon)
                print 'Longitude is = ' + str(raw_data.lon)
        if raw_data['class'] == 'TPV':
            if hasattr(raw_data, 'speed'):
                result["speed"] = str(raw_data.speed)
                print 'Vehicle is moving at = ' + str(raw_data.speed) \
                    + ' KPH'
        if raw_data['class'] == 'TPV':
            if hasattr(raw_data, 'alt'):
                result["speed"] = str(raw_data.speed)
        if raw_data['class'] == 'TPV':
            if hasattr(raw_data, 'time'):
                print 'The current date and time is = ' \
                    + str(raw_data.time) + '\n'
    except KeyError:

        pass
    except KeyboardInterrupt:
        quit()
    except StopIteration:
        session = None
        print 'No incoming data from the GPS module'
