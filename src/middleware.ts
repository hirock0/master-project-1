
import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    const pathname = request.nextUrl.pathname;
    const isPublic = pathname === "/login" || pathname === "/signup";
    const token = request.cookies.get("token")?.value || ""
    if(isPublic && token){
        return NextResponse.redirect(new URL("/",request.nextUrl))
    }
    if(!isPublic && !token){
        return NextResponse.redirect(new URL("/login",request.nextUrl))
    }
}

export const config={
    matcher:[
        '/profile',
        '/dashboard',
        '/login',
        '/signup'
    ]
}