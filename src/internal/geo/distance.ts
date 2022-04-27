import { Point } from "./@types/point";

/**
 * Sorting a list of cordinates based on nearset to a point
 * @param point the main point to sort based on that
 * @param cords the list of cordinates
 * @returns returns a sorted list of cordinates 
 */
const nearestCords = (point: Point , cords: Array<Point>) : Array<Point> => {
    return cords.sort((cordA: Point, cordB: Point,) => cordB.lat - cordA.lat > point.lat && cordB.long - cordA.long > point.long);
}