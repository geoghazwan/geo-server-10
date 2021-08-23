#!/usr/bin/python
# -*- coding: utf-8 -*-
import gps
import time
session = gps.gps('127.0.0.1', '2947')
session.stream(gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)

    try:
        time.sleep(0.5)
        raw_data = session.next()
        if raw_data['class'] == 'TPV':
            if hasattr(raw_data, 'lat'):
                result["lat"] = str(raw_data.lat)
                print str(raw_data.lat)
                quit()
       
    except StopIteration:
        session = None
        print 'No incoming data from the GPS module'
