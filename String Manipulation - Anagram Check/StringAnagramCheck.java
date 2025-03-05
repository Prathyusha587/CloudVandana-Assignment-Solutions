package com.java.testsolutions;

import java.util.Scanner;

public class StringAnagramCheck {
	  public static boolean areAnagrams(String str1, String str2) {
	        if (str1.length() != str2.length()) return false;
	        
	        int[] charCounts = new int[26];
	        str1 = str1.toLowerCase();
	        str2 = str2.toLowerCase();
	        
	        for (int i = 0; i < str1.length(); i++) {
	            charCounts[str1.charAt(i) - 'a']++;
	            charCounts[str2.charAt(i) - 'a']--;
	        }
	        
	        for (int count : charCounts) {
	            if (count != 0) return false;
	        }
	        return true;
	    }
	    
	    public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter first string: ");
	        String str1 = scanner.next();
	        System.out.print("Enter second string: ");
	        String str2 = scanner.next();
	        scanner.close();
	        
	        System.out.println(areAnagrams(str1, str2));
	    }
	}

