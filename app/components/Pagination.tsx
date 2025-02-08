"use client";

import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className="flex items-center justify-center gap-2 mt-4">
            {/* prev */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border border-ashGray text-jet bg-white hover:bg-roseQuartz/30 transition-colors ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                    }`}
            >
                Prev
            </button>

            {/* prev num */}
            {prevPage && (
                <button
                    onClick={() => onPageChange(prevPage)}
                    className="px-4 py-2 rounded-lg border border-ashGray text-jet bg-white hover:bg-roseQuartz/30 transition-colors"
                >
                    {prevPage}
                </button>
            )}

            {/* current num */}
            <span className="px-4 py-2 rounded-lg border border-ashGray text-white bg-cerulean transition-colors">
                {currentPage}
            </span>

            {/* next num */}
            {nextPage && (
                <button
                    onClick={() => onPageChange(nextPage)}
                    className="px-4 py-2 rounded-lg border border-ashGray text-jet bg-white hover:bg-roseQuartz/30 transition-colors"
                >
                    {nextPage}
                </button>
            )}

            {/* next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border border-ashGray text-jet bg-white hover:bg-roseQuartz/30 transition-colors ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
                    }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
