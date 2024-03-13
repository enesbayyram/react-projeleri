package com.enesbayram.hr.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.enesbayram.hr.enums.DateFormatType;

import lombok.experimental.UtilityClass;

@UtilityClass
public class HRDateUtils {

	public static String getddMMYYYYHHmmss(Date date) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(DateFormatType.DD_MM_YYYY_HH_MM_SS.getValue());
		return simpleDateFormat.format(date);
	}
}
